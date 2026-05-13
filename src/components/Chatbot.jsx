import React, { useState, useRef, useEffect } from "react";
import { BsChatDotsFill } from "react-icons/bs";
import { IoSend } from "react-icons/io5";
import { LuCircleMinus } from "react-icons/lu";
import { GrAttachment } from "react-icons/gr";
import { PiDownloadSimpleBold } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import {
  connectSupport,
  getChatService,
  guestDetails,
  sendMessage,
  serviceQuestions,
  validateCustomer,
} from "../features/actions/chatbot";
import echo from "../services/socket";
import { instance } from "../services/axiosInterceptor";

const ChatBot = () => {
  const [sessionId, setSessionId] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const dispatch = useDispatch();

  const { serviceData, questionData } = useSelector((state) => state.chatbot);
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Welcome To Babvip Support. Do you have Customer ID? (Yes/No)",
    },
  ]);

  const [input, setInput] = useState("");

  const [showMenu, setShowMenu] = useState(false);

  const [step, setStep] = useState("askCustomerId");

  const [guestData, setGuestData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const menuRef = useRef(null);

  const chatEndRef = useRef(null);

  const restartChat = () => {
    setMessages([
      {
        sender: "bot",
        text: "Welcome To Babvip Support. Do you have Customer ID? (Yes/No)",
      },
    ]);

    setInput("");

    setStep("askCustomerId");

    setGuestData({
      name: "",
      phone: "",
      email: "",
    });
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

    setMessages((prev) => [...prev, userMessage]);

    setInput("");

    /* =========================
       ASK YES / NO
    ========================= */

    if (step === "askCustomerId") {
      if (messageText.toLowerCase() === "yes") {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: "Please enter your Customer ID",
          },
        ]);

        setStep("askCustomerNumber");
      } else if (messageText.toLowerCase() === "no") {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: "Please enter your full name",
          },
        ]);

        setStep("askGuestName");
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

      setGuestData((prev) => ({
        ...prev,
        customer_id: messageText,
      }));

      try {
        const response = await dispatch(
          validateCustomer(customerPayload),
        ).unwrap();

        // GET SERVICES
        await dispatch(getChatService()).unwrap();

        setMessages((prev) => [
          ...prev,

          {
            sender: "bot",
            text: response?.message || "Customer ID validated successfully.",
          },

          {
            sender: "bot",
            text: "Please select a service.",
          },
        ]);

        setStep("showServices");
      } catch (error) {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: error || "Invalid Customer ID. Please try again.",
          },
        ]);
      }

      return;
    }

    if (step === "showServices") {
      const selected = serviceData.find(
        (service) =>
          service?.service_name.toLowerCase() === messageText.toLowerCase(),
      );

      if (!selected) {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: "Please select a valid service.",
          },
        ]);

        return;
      }

      try {
        setSelectedService(selected);
        // GET QUESTIONS
        await dispatch(serviceQuestions(selected?.id)).unwrap();

        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: "Please select a question.",
          },
        ]);

        setStep("showQuestions");
      } catch (error) {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: error || "Failed to fetch questions.",
          },
        ]);
      }

      return;
    }

    if (step === "showQuestions") {
      const selectedQuestion = questionData.find(
        (question) =>
          question?.question.toLowerCase() === messageText.toLowerCase(),
      );

      if (!selectedQuestion) {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: "Please select a valid question.",
          },
        ]);

        return;
      }

      setMessages((prev) => [
        ...prev,

        {
          sender: "bot",
          text: selectedQuestion?.answer || "Answer not found.",
        },
      ]);

      setStep("afterAnswer");

      return;
    }
    /* =========================
       GUEST NAME
    ========================= */

    if (step === "askGuestName") {
      setGuestData((prev) => ({
        ...prev,
        name: messageText,
      }));

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Please enter your phone number",
        },
      ]);

      setStep("askGuestPhone");

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
        setMessages((prev) => [
          ...prev,

          {
            sender: "bot",
            text: "Phone number must be 10 digits. Please enter a valid mobile number.",
          },
        ]);

        return;
      }

      setGuestData((prev) => ({
        ...prev,
        phone: cleanPhone,
      }));

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Please enter your email address",
        },
      ]);

      setStep("askGuestEmail");

      return;
    }

    /* =========================
       GUEST EMAIL
    ========================= */

    if (step === "askGuestEmail") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(messageText)) {
        setMessages((prev) => [
          ...prev,

          {
            sender: "bot",
            text: "Please enter a valid email address.",
          },
        ]);

        return;
      }

      const finalGuestData = {
        ...guestData,
        email: messageText,
      };

      setGuestData(finalGuestData);

      try {
        // const guestResponse = await dispatch(
        //   guestDetails({
        //     name: finalGuestData.name,
        //     email: finalGuestData.email,
        //     phone: finalGuestData.phone,
        //   }),
        // ).unwrap();

        await dispatch(getChatService()).unwrap();

        setMessages((prev) => [
          ...prev,

          // {
          //   sender: "bot",
          //   text: guestResponse?.message || "Guest details saved successfully.",
          // },

          {
            sender: "bot",
            text: "Please select a service.",
          },
        ]);

        setStep("showServices");
      } catch (error) {
        setMessages((prev) => [
          ...prev,

          {
            sender: "bot",
            text: error || "Failed to save guest details.",
          },

          {
            sender: "bot",
            text: "Please click Retry to submit your details again.",
          },
        ]);

        setStep("retryGuestDetails");
      }

      return;
    }

    if (step === "retryGuestDetails") {
      if (messageText.toLowerCase() !== "retry") {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: "Please restart the chat.",
          },
        ]);

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

        setMessages((prev) => [
          ...prev,

          {
            sender: "bot",
            text: guestResponse?.message || "Guest details saved successfully.",
          },

          {
            sender: "bot",
            text: "Please select a service.",
          },
        ]);

        setStep("showServices");
      } catch (error) {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: error || "Retry failed. Please try again.",
          },
        ]);
      }

      return;
    }

    if (step === "afterAnswer") {
      /* =========================
     BACK TO SERVICES
  ========================= */
      if (messageText.toLowerCase() === "connect to agent") {
        setMessages((prev) => [
          ...prev,

          {
            sender: "bot",
            text: "Would you like to connect with support agent?",
          },
        ]);

        setStep("connectSupport");

        return;
      }

      if (messageText.toLowerCase() === "back to services") {
        setMessages((prev) => [
          ...prev,

          {
            sender: "bot",
            text: "Please select a service.",
          },
        ]);

        setStep("showServices");

        return;
      }

      /* =========================
     CLOSE CHAT
  ========================= */

      if (messageText.toLowerCase() === "close chat") {
        setMessages((prev) => [
          ...prev,

          {
            sender: "bot",
            text: "Thank you for contacting Babvip Support 😊",
          },

          {
            sender: "bot",
            text: "Chat closed successfully.",
          },

          {
            sender: "bot",
            text: "Click Restart Chat to start again.",
          },
        ]);

        setStep("chatClosed");

        return;
      }

      /* =========================
   INVALID OPTION
========================= */

      setMessages((prev) => [
        ...prev,

        {
          sender: "bot",
          text: "Sorry, I couldn't understand your request.",
        },

        {
          sender: "bot",
          text: "Would you like to connect with support agent?",
        },
      ]);

      setStep("connectSupport");

      return;
    }

    if (step === "connectSupport") {
      if (messageText.toLowerCase() !== "connect to agent") {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: "Please click Connect To Agent.",
          },
        ]);

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

        setSessionId(response?.session_id);

        setMessages((prev) => [
          ...prev,

          {
            sender: "bot",
            text: "Please wait for agent to reply.",
          },
        ]);

        setStep("chatStarted");
      } catch (error) {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: error || "Failed to connect support.",
          },
        ]);
      }

      return;
    }

    // connect support logic
    if (step === "agentConfirmation") {
      // NO
      if (messageText.toLowerCase() === "no") {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: "Please choose an option below.",
          },
        ]);

        setStep("afterAnswer");

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

          const response = await dispatch(connectSupport(payload)).unwrap();

          setSessionId(response?.session_id);

          setMessages((prev) => [
            ...prev,
            {
              sender: "bot",
              text: "Please wait for agent to reply.",
            },
          ]);

          setStep("chatStarted");
        } catch (error) {
          setMessages((prev) => [
            ...prev,
            {
              sender: "bot",
              text: error || "Failed to connect support.",
            },
          ]);
        }

        return;
      }

      // invalid
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Please select Yes or No.",
        },
      ]);

      return;
    }

    /* =========================
       CHAT STARTED
    ========================= */

    if (step === "chatStarted") {
      try {
        await dispatch(
          sendMessage({
            session_id: sessionId,
            message: messageText,
          }),
        ).unwrap();
      } catch (error) {
        setMessages((prev) => [
          ...prev,

          {
            sender: "bot",
            text: error || "Failed to send message.",
          },
        ]);
      }

      return;
    }
  };

  const handleTranscriptDownload = (type) => {
    // no session id
    if (!sessionId) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Transcript download will be available after connecting and chatting with an agent.",
        },
      ]);

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
    if (!sessionId) return;

    console.log("Joining Channel:", `chat.${sessionId}`);

    const channel = echo.channel(`chat.${sessionId}`);

    channel.subscribed(() => {
      console.log("✅ Channel Subscribed");
    });

    // channel.listenToAll((event, data) => {
    //   console.log("EVENT:", event);

    //   console.log("DATA:", data);
    // });

    // SOCKET CONNECTED
    echo.connector.pusher.connection.bind("connected", () => {
      console.log("✅ Socket Connected");
    });

    // RECEIVE MESSAGE
    channel.listen(".message.sent", (e) => {
      if (e.sender === "user") return;

      setMessages((prev) => [
        ...prev,
        {
          sender: e.sender,
          text: e.message,
        },
      ]);
    });

    return () => {
      echo.leave(`chat.${sessionId}`);
    };
  }, [sessionId]);

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
      document.head.removeChild(style);
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
                  Support Bot
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
            {messages.map((msg, index) => (
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
                      msg.sender === "user"
                        ? "linear-gradient(135deg, #ff6600, #ff8533)"
                        : "#f1f1f1",

                    color: msg.sender === "user" ? "#fff" : "#000",
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}

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
                    setMessages((prev) => [
                      ...prev,
                      {
                        sender: "bot",
                        text: "Do you want to connect to an agent?",
                      },
                    ]);

                    setStep("agentConfirmation");
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
            <span style={styles.leftIcon}>
              <GrAttachment />
            </span>

            <input
              type="text"
              placeholder="Type your message here..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
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
    height: "620px",
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
};
