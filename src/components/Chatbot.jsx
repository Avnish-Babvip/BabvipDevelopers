import React, { useState, useRef, useEffect } from "react";
import { BsChatDotsFill } from "react-icons/bs";
import { IoSend } from "react-icons/io5";
import { LuCircleMinus } from "react-icons/lu";
import { GrAttachment } from "react-icons/gr";
import { PiDownloadSimpleBold } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import {
  closeChat,
  connectSupport,
  getChatService,
  guestDetails,
  sendImage,
  sendMessage,
  serviceQuestions,
  validateCustomer,
} from "../features/actions/chatbot";
import echo from "../services/socket";
import { instance } from "../services/axiosInterceptor";
import {
  addMessage,
  clearChat,
  removeMessage,
  setGuestData,
  setSelectedService,
  setStep,
  updateMessage,
} from "../features/slices/chatbot";

const ChatBot = () => {
  const fileInputRef = useRef(null);
  const dispatch = useDispatch();
  const [isTyping, setIsTyping] = useState(false);
  const downloadFile = async (type) => {
    try {
      const response = await instance.get(
        `/export/${type}/${supportData?.session_id}`,
        {
          responseType: "blob",
        },
      );

      // create file url
      const blob = new Blob([response.data]);

      const url = window.URL.createObjectURL(blob);

      // create link
      const link = document.createElement("a");

      link.href = url;

      link.download = `chat-transcript.${type}`;

      document.body.appendChild(link);

      link.click();

      link.remove();

      // cleanup
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.log(error);

      dispatch(
        addMessage({
          sender: "bot",
          text: "Failed to download transcript.",
        }),
      );
    }
  };

  const {
    serviceData,
    questionData,
    supportData,
    messages,
    step,
    guestData,
    selectedService,
  } = useSelector((state) => state.chatbot);
  const [isOpen, setIsOpen] = useState(false);

  const [input, setInput] = useState("");

  const [showMenu, setShowMenu] = useState(false);

  const menuRef = useRef(null);

  const chatEndRef = useRef(null);

  const restartChat = () => {
    dispatch(clearChat());
  };

  const typingTimeoutRef = useRef(null);

  const debounceTimeoutRef = useRef(null);

  const handleTyping = (value) => {
    setInput(value);

    // only when agent connected
    if (step !== "chatStarted") return;

    // clear old debounce timer
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }

    // debounce api call
    debounceTimeoutRef.current = setTimeout(async () => {
      try {
        await instance.post("chat/typing", {
          session_id: supportData?.session_id,
        });
      } catch (error) {
        console.log(error);
      }
    }, 500);

    // reset typing visibility timer
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      typingTimeoutRef.current = null;
    }, 1500);
  };

  const handleCloseChat = async () => {
    try {
      await dispatch(
        closeChat({
          session_id: supportData?.session_id,
        }),
      ).unwrap();

      setInput("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    // 🔥 prevent upload without session
    if (!supportData?.session_id) {
      alert("Please start the chat first before uploading images.");
      return;
    }

    const localPreview = URL.createObjectURL(file);
    // preview message
    const tempId = Date.now();

    dispatch(
      addMessage({
        tempId,
        type: "image",
        image: localPreview,
        sender: "user",
        isUploading: true,
      }),
    );

    try {
      const formData = new FormData();

      formData.append("session_id", supportData?.session_id);
      formData.append("file", file);

      const response = await dispatch(sendImage(formData)).unwrap();
      dispatch(
        updateMessage({
          matchField: "tempId",
          matchValue: tempId,
          updatedData: {
            image:
              response?.image_url ||
              response?.payload?.image_url ||
              localPreview,

            isUploading: false,
          },
        }),
      );
    } catch (error) {
      dispatch(
        removeMessage({
          matchField: "tempId",
          matchValue: tempId,
        }),
      );
    }
    e.target.value = "";
  };

  /* =========================
     OPEN CHAT
  ========================= */

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  /* =========================
     SEND MESSAGE
  ========================= */

  const handleSend = async (text) => {
    const messageText = text || input;
    if (messageText === "Restart Chat") {
      restartChat();

      return;
    }
    if (!messageText.trim()) return;

    // USER MESSAGE
    const userMessage = {
      sender: "user",
      text: messageText,
    };

    dispatch(addMessage(userMessage));

    setInput("");

    /* =========================
       ASK YES / NO
    ========================= */

    if (step === "askCustomerId") {
      if (messageText.toLowerCase() === "yes") {
        dispatch(
          addMessage({
            sender: "bot",
            text: "Please enter your Customer ID",
          }),
        );

        dispatch(setStep("askCustomerNumber"));
      } else if (messageText.toLowerCase() === "no") {
        dispatch(
          addMessage({
            sender: "bot",
            text: "Please enter your full name",
          }),
        );
        dispatch(setStep("askGuestName"));
      }

      return;
    }

    /* =========================
       CUSTOMER ID FLOW
    ========================= */
    if (step === "askCustomerNumber") {
      const customerPayload = {
        customer_id: messageText,
      };
      dispatch(
        setGuestData({
          ...guestData,
          customer_id: messageText,
        }),
      );

      try {
        const response = await dispatch(
          validateCustomer(customerPayload),
        ).unwrap();

        // GET SERVICES
        await dispatch(getChatService()).unwrap();

        dispatch(
          addMessage({
            sender: "bot",
            text: response?.message || "Customer ID validated successfully.",
          }),
        );

        dispatch(
          addMessage({
            sender: "bot",
            text: "Please select a service.",
          }),
        );

        dispatch(setStep("showServices"));
      } catch (error) {
        dispatch(
          addMessage({
            sender: "bot",
            text: error || "Invalid Customer ID. Please try again.",
          }),
        );

        dispatch(
          addMessage({
            sender: "bot",
            text: "If you forgot your Customer ID, you can restart the chat and continue as Guest.",
          }),
        );

        dispatch(
          addMessage({
            sender: "bot",
            text: "Click Restart Chat below to start again.",
          }),
        );

        dispatch(setStep("chatClosed"));
      }

      return;
    }

    if (step === "showServices") {
      const selected = serviceData.find(
        (service) =>
          service?.service_name.toLowerCase() === messageText.toLowerCase(),
      );

      if (!selected) {
        dispatch(
          addMessage({
            sender: "bot",
            text: "Please select a valid service.",
          }),
        );

        return;
      }

      try {
        dispatch(setSelectedService(selected));
        // GET QUESTIONS
        await dispatch(serviceQuestions(selected?.id)).unwrap();
        dispatch(
          addMessage({
            sender: "bot",
            text: "Please select a question.",
          }),
        );

        dispatch(setStep("showQuestions"));
      } catch (error) {
        dispatch(
          addMessage({
            sender: "bot",
            text: error || "Failed to fetch questions.",
          }),
        );
      }

      return;
    }

    if (step === "showQuestions") {
      const selectedQuestion = questionData.find(
        (question) =>
          question?.question.toLowerCase() === messageText.toLowerCase(),
      );

      if (!selectedQuestion) {
        dispatch(
          addMessage({
            sender: "bot",
            text: "Please select a valid question.",
          }),
        );

        return;
      }

      dispatch(
        addMessage({
          sender: "bot",
          text: selectedQuestion?.answer || "Answer not found.",
        }),
      );

      dispatch(setStep("afterAnswer"));

      return;
    }
    /* =========================
       GUEST NAME
    ========================= */

    if (step === "askGuestName") {
      dispatch(
        setGuestData({
          ...guestData,
          name: messageText,
        }),
      );
      dispatch(
        addMessage({
          sender: "bot",
          text: "Please enter your phone number",
        }),
      );

      dispatch(setStep("askGuestPhone"));

      return;
    }

    /* =========================
       GUEST PHONE
    ========================= */

    if (step === "askGuestPhone") {
      // REMOVE NON DIGITS
      const cleanPhone = messageText.replace(/\D/g, "");

      // VALIDATE
      if (cleanPhone.length !== 10) {
        dispatch(
          addMessage({
            sender: "bot",
            text: "Phone number must be 10 digits. Please enter a valid mobile number.",
          }),
        );

        return;
      }

      dispatch(
        setGuestData({
          ...guestData,
          phone: cleanPhone,
        }),
      );
      dispatch(
        addMessage({
          sender: "bot",
          text: "Please enter your email address",
        }),
      );

      dispatch(setStep("askGuestEmail"));

      return;
    }

    /* =========================
       GUEST EMAIL
    ========================= */

    if (step === "askGuestEmail") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(messageText)) {
        dispatch(
          addMessage({
            sender: "bot",
            text: "Please enter a valid email address.",
          }),
        );
        return;
      }

      const finalGuestData = {
        ...guestData,
        email: messageText,
      };

      dispatch(setGuestData(finalGuestData));

      try {
        // const guestResponse = await dispatch(
        //   guestDetails({
        //     name: finalGuestData.name,
        //     email: finalGuestData.email,
        //     phone: finalGuestData.phone,
        //   }),
        // ).unwrap();

        await dispatch(getChatService()).unwrap();

        dispatch(
          addMessage({
            sender: "bot",
            text: "Please select a service.",
          }),
        );

        dispatch(setStep("showServices"));
      } catch (error) {
        dispatch(
          addMessage({
            sender: "bot",
            text: error || "Failed to save guest details.",
          }),
        );
        dispatch(
          addMessage({
            sender: "bot",
            text: "Please click Retry to submit your details again.",
          }),
        );

        dispatch(setStep("retryGuestDetails"));
      }

      return;
    }

    if (step === "retryGuestDetails") {
      if (messageText.toLowerCase() !== "retry") {
        dispatch(
          addMessage({
            sender: "bot",
            text: "Please restart the chat.",
          }),
        );

        return;
      }

      try {
        const guestResponse = await dispatch(
          guestDetails({
            name: guestData.name,
            email: guestData.email,
            phone: guestData.phone,
          }),
        ).unwrap();

        await dispatch(getChatService()).unwrap();

        dispatch(
          addMessage({
            sender: "bot",
            text: guestResponse?.message || "Guest details saved successfully.",
          }),
        );

        dispatch(
          addMessage({
            sender: "bot",
            text: "Please select a service.",
          }),
        );

        dispatch(setStep("showServices"));
      } catch (error) {
        dispatch(
          addMessage({
            sender: "bot",
            text: error || "Retry failed. Please try again.",
          }),
        );
      }

      return;
    }

    if (step === "afterAnswer") {
      /* =========================
     BACK TO SERVICES
  ========================= */
      if (messageText.toLowerCase() === "connect to agent") {
        dispatch(
          addMessage({
            sender: "bot",
            text: "Would you like to connect with support agent?",
          }),
        );

        dispatch(setStep("connectSupport"));

        return;
      }

      if (messageText.toLowerCase() === "back to services") {
        dispatch(
          addMessage({
            sender: "bot",
            text: "Please select a service.",
          }),
        );

        dispatch(setStep("showServices"));

        return;
      }

      /* =========================
     CLOSE CHAT
  ========================= */

      if (messageText.toLowerCase() === "close chat") {
        dispatch(
          addMessage({
            sender: "bot",
            text: "Thank you for contacting Babvip Support 😊",
          }),
        );
        dispatch(
          addMessage({
            sender: "bot",
            text: "Chat closed successfully.",
          }),
        );
        dispatch(
          addMessage({
            sender: "bot",
            text: "Click Restart Chat to start again.",
          }),
        );

        dispatch(setStep("chatClosed"));

        return;
      }

      /* =========================
   INVALID OPTION
========================= */

      dispatch(
        addMessage({
          sender: "bot",
          text: "Sorry, I couldn't understand your request.",
        }),
      );

      dispatch(
        addMessage({
          sender: "bot",
          text: "Would you like to connect with support agent?",
        }),
      );

      dispatch(setStep("connectSupport"));

      return;
    }

    if (step === "connectSupport") {
      if (messageText.toLowerCase() !== "connect to agent") {
        dispatch(
          addMessage({
            sender: "bot",
            text: "Please click Connect To Agent.",
          }),
        );

        return;
      }

      try {
        const payload = {
          customer_id: guestData?.customer_id || null,

          service_id: selectedService?.id,

          messages: messages.map((msg) => ({
            sender: msg.sender,
            message: msg.text,
          })),
        };

        const response = await dispatch(connectSupport(payload)).unwrap();
        dispatch(
          addMessage({
            sender: "bot",
            text: "Please wait for agent to reply.",
          }),
        );

        dispatch(setStep("chatStarted"));
      } catch (error) {
        dispatch(
          addMessage({
            sender: "bot",
            text: error || "Failed to connect support.",
          }),
        );
      }

      return;
    }

    // connect support logic
    if (step === "agentConfirmation") {
      // NO
      if (messageText.toLowerCase() === "no") {
        dispatch(
          addMessage({
            sender: "bot",
            text: "Please choose an option below.",
          }),
        );

        dispatch(setStep("afterAnswer"));

        return;
      }

      // YES
      if (messageText.toLowerCase() === "yes") {
        try {
          const payload = {
            customer_id: guestData?.customer_id || null,

            service_id: selectedService?.id,

            messages: messages.map((msg) => ({
              sender: msg.sender,
              message: msg.text,
            })),
          };

          await dispatch(connectSupport(payload)).unwrap();

          dispatch(
            addMessage({
              sender: "bot",
              text: "Please wait for agent to reply.",
            }),
          );

          dispatch(setStep("chatStarted"));
        } catch (error) {
          dispatch(
            addMessage({
              sender: "bot",
              text: error || "Failed to connect support.",
            }),
          );
        }

        return;
      }

      dispatch(
        addMessage({
          sender: "bot",
          text: "Please select Yes or No.",
        }),
      );

      return;
    }

    /* =========================
       CHAT STARTED
    ========================= */

    if (step === "chatStarted") {
      try {
        await dispatch(
          sendMessage({
            session_id: supportData?.session_id,
            message: messageText,
          }),
        ).unwrap();
      } catch (error) {
        dispatch(
          addMessage({
            sender: "bot",
            text: error || "Failed to send message.",
          }),
        );
      }

      return;
    }
  };

  const handleTranscriptDownload = (type) => {
    // no session id
    if (!supportData?.session_id) {
      dispatch(
        addMessage({
          sender: "bot",
          text: "Transcript download will be available after connecting and chatting with an agent.",
        }),
      );

      return;
    }

    // download file
    downloadFile(type);
  };

  /* =========================
     CLICK OUTSIDE MENU
  ========================= */

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  /* =========================
     AUTO SCROLL
  ========================= */

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  useEffect(() => {
    if (!supportData?.session_id) return;

    console.log("Joining Channel:", `chat.${supportData?.session_id}`);

    const channel = echo.channel(`chat.${supportData?.session_id}`);

    channel.subscribed(() => {
      console.log("✅ Channel Subscribed");
    });

    // SOCKET CONNECTED
    echo.connector.pusher.connection.bind("connected", () => {
      console.log("✅ Socket Connected");
    });

    // RECEIVE MESSAGE
    channel.listen(".message.sent", (e) => {
      if (e.sender === "user") return;

      channel.listen(".user.typing", (e) => {
        if (e.sender === "agent") {
          setIsTyping(true);

          clearTimeout(window.agentTypingTimeout);

          window.agentTypingTimeout = setTimeout(() => {
            setIsTyping(false);
          }, 2000);
        }
      });

      dispatch(
        addMessage({
          sender: e.sender,
          text: e.message,
        }),
      );
    });

    return () => {
      echo.leave(`chat.${supportData?.session_id}`);
    };
  }, [supportData?.session_id]);

  useEffect(() => {
    const style = document.createElement("style");

    style.innerHTML = `
    @keyframes slideUp {
      from {
        transform: translateY(30px);
        opacity: 0;
      }

      to {
        transform: translateY(0);
        opacity: 1;
      }
    }

    @keyframes pulse {
      0% {
        box-shadow: 0 0 0 0 rgba(255,102,0,0.5);
      }

      70% {
        box-shadow: 0 0 0 12px rgba(255,102,0,0);
      }

      100% {
        box-shadow: 0 0 0 0 rgba(255,102,0,0);
      }
    }

    @keyframes bounce {
      0%, 80%, 100% {
        transform: scale(0.8);
        opacity: 0.5;
      }

      40% {
        transform: scale(1);
        opacity: 1;
      }
    }
  `;

    document.head.appendChild(style);

    return () => {
      // safe cleanup
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);
  return (
    <>
      {/* FLOATING BUTTON */}

      <div
        onClick={toggleChat}
        style={styles.fab}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <BsChatDotsFill size={22} color="#fff" />
      </div>

      {/* CHAT WINDOW */}

      {isOpen && (
        <div style={styles.chatBox}>
          {/* HEADER */}

          <div style={styles.header}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <div style={styles.avatar}>B</div>

              <div>
                <div
                  style={{
                    fontWeight: 600,
                  }}
                >
                  Support Chat
                </div>

                <div style={styles.online}>● Online</div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              {/* DOWNLOAD */}

              <div
                style={{
                  position: "relative",
                }}
                ref={menuRef}
              >
                <button
                  style={styles.iconBtn}
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowMenu(!showMenu);
                  }}
                >
                  <PiDownloadSimpleBold size={20} />
                </button>

                {showMenu && (
                  <div style={styles.dropdown}>
                    <div
                      style={styles.dropdownItem}
                      onClick={() => handleTranscriptDownload("txt")}
                    >
                      Transcript (.txt)
                    </div>

                    <div
                      style={styles.dropdownItem}
                      onClick={() => handleTranscriptDownload("pdf")}
                    >
                      Transcript (.pdf)
                    </div>
                  </div>
                )}
              </div>

              {/* CLOSE */}

              <button
                onClick={toggleChat}
                style={{
                  background: "transparent",
                  border: "none",
                  padding: 0,
                  margin: 0,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <LuCircleMinus size={20} color="#fff" />
              </button>
            </div>
          </div>

          {/* MESSAGES */}

          <div style={styles.messages}>
            {messages?.map((msg, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent:
                    msg.sender === "user" ? "flex-end" : "flex-start",
                  marginBottom: 10,
                }}
              >
                {msg.sender === "bot" && <div style={styles.botAvatar}>B</div>}

                <div
                  style={{
                    ...styles.bubble,

                    background:
                      msg.type === "image"
                        ? "transparent"
                        : msg.sender === "user"
                          ? "linear-gradient(135deg, #ff6600, #ff8533)"
                          : "#f1f1f1",

                    color: msg.sender === "user" ? "#fff" : "#000",

                    padding: msg.type === "image" ? 0 : "12px 14px",
                  }}
                >
                  {msg.type === "image" ? (
                    <div style={{ position: "relative" }}>
                      <img
                        src={msg.image}
                        alt="uploaded"
                        style={{
                          width: "220px",
                          maxWidth: "100%",
                          borderRadius: "14px",
                          objectFit: "cover",
                          border: "1px solid #eee",
                          opacity: msg.isUploading ? 0.6 : 1,
                        }}
                      />

                      {msg.isUploading && (
                        <div
                          style={{
                            position: "absolute",
                            inset: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            background: "rgba(0,0,0,0.35)",
                            borderRadius: "14px",
                            color: "#fff",
                            fontSize: "13px",
                            fontWeight: 500,
                          }}
                        >
                          Uploading...
                        </div>
                      )}
                    </div>
                  ) : (
                    msg.text
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div style={styles.typingWrapper}>
                <div style={styles.botAvatar}>B</div>

                <div style={styles.typing}>
                  <div
                    style={{
                      ...styles.typingDot,
                      animationDelay: "0s",
                    }}
                  ></div>

                  <div
                    style={{
                      ...styles.typingDot,
                      animationDelay: "0.2s",
                    }}
                  ></div>

                  <div
                    style={{
                      ...styles.typingDot,
                      animationDelay: "0.4s",
                    }}
                  ></div>
                </div>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          {/* QUICK ACTIONS */}

          <div style={styles.quickActions}>
            {step === "retryGuestDetails" && (
              <button
                onClick={() => handleSend("Restart Chat")}
                style={styles.quickBtn}
              >
                Retry
              </button>
            )}
            {step === "askCustomerId" &&
              ["Yes", "No"].map((item, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(item)}
                  style={styles.quickBtn}
                >
                  {item}
                </button>
              ))}
            {step === "showServices" &&
              serviceData.map((service) => (
                <button
                  key={service.id}
                  onClick={() => handleSend(service.service_name)}
                  style={styles.quickBtn}
                >
                  {service.service_name}
                </button>
              ))}
            {step === "showQuestions" &&
              questionData.map((question) => (
                <button
                  key={question.id}
                  onClick={() => handleSend(question.question)}
                  style={styles.quickBtn}
                >
                  {question.question}
                </button>
              ))}
            {step === "afterAnswer" && (
              <>
                <button
                  onClick={() => handleSend("Back To Services")}
                  style={styles.quickBtn}
                >
                  Back To Services
                </button>

                <button
                  onClick={() => handleSend("Close Chat")}
                  style={styles.quickBtn}
                >
                  Close Chat
                </button>

                <button
                  onClick={() => {
                    dispatch(
                      addMessage({
                        sender: "bot",
                        text: "Do you want to connect to an agent?",
                      }),
                    );

                    dispatch(setStep("agentConfirmation"));
                  }}
                  style={styles.quickBtn}
                >
                  Connect To Agent
                </button>
              </>
            )}

            {step === "agentConfirmation" && (
              <>
                <button
                  onClick={() => handleSend("Yes")}
                  style={styles.quickBtn}
                >
                  Yes
                </button>

                <button
                  onClick={() => handleSend("No")}
                  style={styles.quickBtn}
                >
                  No
                </button>
              </>
            )}
            {step === "chatStarted" && (
              <button
                onClick={() => {
                  dispatch(
                    addMessage({
                      sender: "bot",
                      text: "Are you sure you want to close the chat?",
                    }),
                  );

                  dispatch(setStep("confirmCloseChat"));
                }}
                style={styles.quickBtn}
              >
                Close Chat
              </button>
            )}

            {step === "confirmCloseChat" && (
              <>
                <button
                  onClick={async () => {
                    try {
                      await dispatch(
                        closeChat({
                          session_id: supportData?.session_id,
                        }),
                      ).unwrap();

                      dispatch(
                        addMessage({
                          sender: "bot",
                          text: "Chat closed successfully.",
                        }),
                      );

                      dispatch(
                        addMessage({
                          sender: "bot",
                          text: "Thank you for contacting Babvip Support 😊",
                        }),
                      );

                      dispatch(setStep("chatClosed"));
                    } catch (error) {
                      dispatch(
                        addMessage({
                          sender: "bot",
                          text: error || "Failed to close chat.",
                        }),
                      );

                      dispatch(setStep("chatStarted"));
                    }
                  }}
                  style={styles.quickBtn}
                >
                  Yes
                </button>

                <button
                  onClick={() => {
                    dispatch(
                      addMessage({
                        sender: "bot",
                        text: "Chat resumed successfully.",
                      }),
                    );

                    dispatch(setStep("chatStarted"));
                  }}
                  style={styles.quickBtn}
                >
                  No
                </button>
              </>
            )}
            {step === "chatClosed" && (
              <button
                onClick={() => handleSend("Restart Chat")}
                style={styles.quickBtn}
              >
                Restart Chat
              </button>
            )}
            {step === "connectSupport" && (
              <button
                onClick={() => handleSend("Connect To Agent")}
                style={styles.quickBtn}
              >
                Connect To Agent
              </button>
            )}
          </div>

          {/* INPUT */}

          <div style={styles.inputWrapper}>
            <>
              <button
                type="button"
                disabled={step !== "chatStarted"}
                title={
                  step !== "chatStarted"
                    ? "Image upload available after connecting with agent"
                    : "Upload image"
                }
                onClick={() => fileInputRef.current.click()}
                style={{
                  ...styles.leftIconBtn,
                  opacity: step !== "chatStarted" ? 0.5 : 1,
                  cursor: step !== "chatStarted" ? "not-allowed" : "pointer",
                }}
              >
                <GrAttachment />
              </button>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                hidden
                onChange={handleImageUpload}
              />
            </>

            <input
              type="text"
              placeholder="Type your message here..."
              value={input}
              onChange={(e) => handleTyping(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              style={styles.inputField}
            />

            <button onClick={() => handleSend()} style={styles.sendIconBtn}>
              <IoSend size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;

/* =========================
   STYLES
========================= */

const styles = {
  inputWrapper: {
    display: "flex",
    alignItems: "center",
    background: "#fff",
    borderTop: "1px solid #eee",
    padding: "12px",
    gap: "10px",
  },

  leftIcon: {
    fontSize: "16px",
    color: "#ff6600",
    cursor: "pointer",
  },

  inputField: {
    flex: 1,
    border: "none",
    outline: "none",
    background: "#f6f7fb",
    fontSize: "14px",
    borderRadius: "30px",
    padding: "12px 15px",
  },

  sendIconBtn: {
    width: "42px",
    height: "42px",
    borderRadius: "50%",
    border: "none",
    background: "linear-gradient(135deg,#ff6600,#ff8533)",
    color: "#fff",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 10px rgba(255,102,0,0.3)",
  },

  iconBtn: {
    background: "rgba(255,255,255,0.15)",
    border: "none",
    color: "#fff",
    width: "35px",
    height: "35px",
    borderRadius: "50%",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  dropdown: {
    position: "absolute",
    top: "45px",
    right: 0,
    background: "#fff",
    borderRadius: "14px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
    overflow: "hidden",
    zIndex: 10,
    width: "190px",
    border: "1px solid #eee",
  },

  dropdownItem: {
    padding: "13px 15px",
    fontSize: "13px",
    cursor: "pointer",
    borderBottom: "1px solid #f5f5f5",
    color: "#333",
    transition: "0.2s",
    fontWeight: "500",
  },

  fab: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    background: "linear-gradient(135deg,#ff6600,#ff8533)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    boxShadow: "0 10px 25px rgba(255,102,0,0.4)",
    zIndex: 999,
    transition: "0.3s",
    animation: "pulse 2s infinite",
  },

  chatBox: {
    position: "fixed",
    bottom: "90px",
    right: "20px",
    width: "360px",
    height: "500px",
    background: "#fff",
    borderRadius: "24px",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    boxShadow: "0 20px 50px rgba(0,0,0,0.2)",
    zIndex: 999,
    animation: "slideUp 0.3s ease",
  },

  header: {
    background: "linear-gradient(135deg,#ff6600,#ff8533)",
    color: "#fff",
    padding: "15px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },

  avatar: {
    width: "42px",
    height: "42px",
    borderRadius: "50%",
    background: "#fff",
    color: "#ff6600",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: "16px",
  },

  botAvatar: {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    background: "linear-gradient(135deg,#ff6600,#ff8533)",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "12px",
    marginRight: "8px",
    flexShrink: 0,
  },

  online: {
    fontSize: "11px",
    color: "#d1fae5",
    marginTop: "2px",
  },

  messages: {
    flex: 1,
    padding: "16px",
    overflowY: "auto",
    background: "linear-gradient(to bottom,#f9fafb,#eef2f7)",
  },

  bubble: {
    padding: "12px 15px",
    borderRadius: "20px",
    maxWidth: "78%",
    fontSize: "13px",
    lineHeight: "1.5",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    wordBreak: "break-word",
  },

  messageTime: {
    fontSize: "10px",
    opacity: 0.6,
    marginTop: "5px",
  },

  quickActions: {
    display: "flex",
    gap: "8px",
    padding: "12px",
    overflowX: "auto",
    background: "#fff",
    borderTop: "1px solid #eee",
  },

  quickBtn: {
    padding: "8px 14px",
    borderRadius: "50px",
    border: "1px solid #ff6600",
    background: "#fff",
    color: "#ff6600",
    fontSize: "12px",
    cursor: "pointer",
    whiteSpace: "nowrap",
    transition: "0.3s",
    fontWeight: "600",
    boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
  },

  typingWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "10px",
  },

  typing: {
    display: "flex",
    gap: "4px",
    background: "#fff",
    padding: "10px 14px",
    borderRadius: "20px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
  },

  typingDot: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    background: "#999",
    animation: "bounce 1.2s infinite",
  },

  agentBadge: {
    background: "#dcfce7",
    color: "#166534",
    padding: "6px 10px",
    borderRadius: "10px",
    fontSize: "11px",
    marginBottom: "12px",
    width: "fit-content",
    fontWeight: "600",
  },

  leftIconBtn: {
    border: "none",
    background: "transparent",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#666",
    fontSize: "18px",
  },
};
