import React from "react";
import { useParams } from "react-router-dom";

import RequestStatusForm from "../request-status-form";
import { useRequestActions } from "../../hooks";

import "./edit-request-page.css";

const EditRequestStatusPage = () => {
  const { id } = useParams();
  const { updateRequest } = useRequestActions();

  return (
    <div>
      <h1>Edit request {id} status</h1>
      <RequestStatusForm id={id} saveItem={updateRequest} />
    </div>
  );
};

export default EditRequestStatusPage;
