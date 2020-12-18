import React from "react";

import { withRequestItem } from "../hoc";

import "./request-status-form.css";

const RequestStatusForm = ({
  request,
  statuses,
  onChangeRequestProperty,
  onBack,
  onSave,
}) => {
  const {
    id,
    createDate,
    username,
    subject,
    description,
    status,
    solution,
  } = request;

  const statusOptions = statuses.map((s) => {
    return (
      <option key={s} value={s}>
        {s}
      </option>
    );
  });

  return (
    <div>
      <table className="page-table request-edit-status__table">
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
        </tbody>
      </table>
      <form className="page-form">
        <label htmlFor="subect">Status:</label>
        <select
          name="status"
          id="status"
          value={status}
          onChange={onChangeRequestProperty}
        >
          {/* <option value="Open">Open</option>
          <option value="In progress">In progress</option>
          <option value="Closed">Closed</option> */}
          {statusOptions}
        </select>
        <label htmlFor="solution">Solution:</label>
        <textarea
          name="solution"
          id="solution"
          cols="30"
          rows="10"
          value={solution}
          onChange={onChangeRequestProperty}
        ></textarea>
      </form>
      <div className="page-actions">
        <button className="page-button" onClick={onSave}>
          Save
        </button>
        <button className="page-button" onClick={onBack}>
          Back
        </button>
      </div>
    </div>
  );
};

export default withRequestItem(RequestStatusForm);
