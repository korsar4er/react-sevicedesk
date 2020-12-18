import React from "react";

import { withRequestItem } from "../hoc";

import "./request-details.css";

const RequestDetails = ({ request, onBack }) => {
  const {
    id,
    createDate,
    username,
    subject,
    description,
    status,
    solution,
    closeDate,
  } = request;

  return (
    <div>
      <table className="page-table request-details__table">
        <tbody>
          <tr>
            <td>ID:</td>
            <td>{id}</td>
          </tr>
          <tr>
            <td>Create date:</td>
            <td>{new Date(createDate).toLocaleString()}</td>
          </tr>
          <tr>
            <td>User name:</td>
            <td>{username}</td>
          </tr>
          <tr>
            <td>Subject:</td>
            <td>{subject}</td>
          </tr>
          <tr>
            <td>Description:</td>
            <td>{description}</td>
          </tr>
          <tr>
            <td>Status:</td>
            <td>{status}</td>
          </tr>
          <tr>
            <td>Solution:</td>
            <td>{solution}</td>
          </tr>
          <tr>
            <td>Close date:</td>
            <td>{closeDate ? new Date(closeDate).toLocaleString() : ""}</td>
          </tr>
        </tbody>
      </table>
      <div className="page-actions">
        <button className="page-button" onClick={onBack}>
          Back
        </button>
      </div>
    </div>
  );
};

export default withRequestItem(RequestDetails);
