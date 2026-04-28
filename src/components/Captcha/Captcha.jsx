import React, { useState, useEffect } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";

const Captcha = ({ onVerify }) => {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    loadCaptchaEnginge(5);
  }, []);

  const handleVerify = () => {
    if (validateCaptcha(input)) {
      setMessage("✔ Captcha Verified Successfully!");
      onVerify(true); // <-- SEND STATUS TO PARENT
      setInput("");
      loadCaptchaEnginge(5);
    } else {
      setMessage("❌ Incorrect Captcha. Please try again.");
      onVerify(false); // <-- FAILED
      setInput("");
      loadCaptchaEnginge(5);
    }
  };

  return (
    <div className="p-3 border rounded bg-light mt-3">
      <LoadCanvasTemplate />

      <input
        type="text"
        className="form-control my-2"
        placeholder="Enter Captcha"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        type="button"
        className="btn btn-primary w-100"
        onClick={handleVerify}
      >
        Verify Captcha
      </button>

      {message && (
        <div
          className={`alert my-2 ${
            message.includes("✔") ? "alert-success" : "alert-danger"
          }`}
        >
          {message}
        </div>
      )}
    </div>
  );
};

export default Captcha;
