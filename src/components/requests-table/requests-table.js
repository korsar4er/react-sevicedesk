import React from "react";
import { Link } from "react-router-dom";

import { withRequestList } from "../hoc";
import { routes } from "../../constants";

import "./requests-table.css";

const RequestsTable = ({
  requestList,
  loading,
  onEditRequest,
  onRemoveRequest,
}) => {
  const tBody = requestList.map(
    ({ id, subject, username, status, createDate }) => {
      return (
        <tr key={id}>
          <td>
            <Link to={`${routes.REQUESTS}/${id}`}>{id}</Link>
          </td>
          <td>{new Date(createDate).toLocaleString()}</td>
          <td>{username}</td>
          <td>{subject}</td>
          <td>{status}</td>
          <td>
            <div className="requests__actions">
              <button onClick={() => onEditRequest(id)}>
                <i className="icofont-ui-edit" />
              </button>
              <button onClick={() => onRemoveRequest(id)}>
                <i className="icofont-ui-delete" />
              </button>
            </div>
          </td>
        </tr>
      );
    }
  );
  let message = "";
  if (loading) message = "Loading...";
  else if (requestList.length === 0) message = "No data found";

  return (
    <div>
      <table className="page-table requests__table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>User name</th>
            <th>Subject</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{tBody}</tbody>
      </table>
      <div className="page-table-message">{message}</div>
    </div>
  );
};

export default withRequestList(RequestsTable);
