import React from "react";

import RequestForm from "../request-form";
import { useRequestActions } from "../../hooks";

import "./pages.css";
import "./new-request-page.css";

const NewRequestPage = () => {
  const { addRequest } = useRequestActions();

  return (
    <div>
      <h1>Create new request</h1>
      <RequestForm saveItem={addRequest} />
    </div>
  );
};

export default NewRequestPage;
