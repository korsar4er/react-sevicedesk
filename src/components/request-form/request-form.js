import React from "react";

import { withRequestItem } from "../hoc";

import "./request-form.css";

const RequestForm = ({ request, onChangeRequestProperty, onBack, onSave }) => {
  const { username, subject, description } = request;

  return (
    <div>
      <form id="request-form" className="page-form">
        <label htmlFor="username">Your name:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={onChangeRequestProperty}
        />

        <label htmlFor="subect">Subject:</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={subject}
          onChange={onChangeRequestProperty}
        />

        <label htmlFor="description">Description:</label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="10"
          value={description}
          onChange={onChangeRequestProperty}
        />
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

export default withRequestItem(RequestForm);
