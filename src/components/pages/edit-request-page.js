import React from "react";
import { useParams } from "react-router-dom";

import RequestForm from "../request-form";
import { useRequestActions } from "../../hooks";

import "./edit-request-page.css";

const EditRequestPage = () => {
  const { id } = useParams();
  const { updateRequest } = useRequestActions();

  return (
    <div>
      <h1>Edit request {id}</h1>
      <RequestForm id={id} saveItem={updateRequest} />
    </div>
  );
};

export default EditRequestPage;
