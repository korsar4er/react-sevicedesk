import React from "react";

import { useAppContext } from "../../hooks";

import "./access-denied-indicator.css";

const AccessDeniedIndicator = () => {
  const { currentRole } = useAppContext();

  return (
    <div>
      <h1>Access denied for role {currentRole}</h1>
    </div>
  );
};

export default AccessDeniedIndicator;
