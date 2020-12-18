import React from "react";

import "./error-indicator.css";

const ErrorIndicator = ({ message, setMessage }) => {
  if (!message) return "";

  return (
    <div className="error-indicator">
      <p className="error-indicator__text">{message}</p>
      <button onClick={() => setMessage("")} className="page-button">
        OK
      </button>
    </div>
  );
};

export default ErrorIndicator;
