import React from "react";

import CreateRequestButton from "../create-request-button";
import RequestsTable from "../requests-table";

import "./pages.css";
import "./requests-page.css";

const RequestsPage = () => {
  return (
    <div className="requests">
      <h1 className="page-header">Requests</h1>
      <CreateRequestButton />
      <RequestsTable />
    </div>
  );
};

export default RequestsPage;
