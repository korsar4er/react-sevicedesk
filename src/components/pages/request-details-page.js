import React from "react";
import { useParams } from "react-router-dom";

import RequestDetails from "../request-details";

import "./request-details-page.css";

const RequestDetailsPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h1 className="page-header">Request details</h1>
      <RequestDetails id={id} />
    </div>
  );
};

export default RequestDetailsPage;
