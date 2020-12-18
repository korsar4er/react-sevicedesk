import React from "react";

import CreateRequestButton from "../create-request-button";

import "./pages.css";
import "./home-page.css";

const HomePage = () => {
  return (
    <div className="home">
      <h1>Welcome to Service Desk!</h1>
      <p>If you have a problem - call phone 8-800-123-4567</p>
      <p>or press button to create help request </p>
      <CreateRequestButton />
    </div>
  );
};

export default HomePage;
