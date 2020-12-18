import React, { useContext, useState, useEffect } from "react";

import ServicedeskServiceContext from "../servicedesk-service-context";
import AppContext from "../app-context";

import "./status-count-table.css";

const StatusCountTableContainer = () => {
  const servicedeskService = useContext(ServicedeskServiceContext);
  const { setErrorMessage } = useContext(AppContext);
  const [statusCount, setStatusCount] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMount = true;
    setLoading(true);
    setErrorMessage("");
    servicedeskService
      .getStatusCount()
      .then((items) => {
        if (isMount) setStatusCount(items);
      })
      .catch((err) => {
        if (isMount) {
          setStatusCount([]);
          setErrorMessage(`Get status count error: ${err.message}`);
        }
      })
      .finally(() => {
        if (isMount) setLoading(false);
      });

    return () => {
      isMount = false;
    };
  }, [servicedeskService, setErrorMessage]);

  return <StatusCountTable statusCount={statusCount} loading={loading} />;
};

const StatusCountTable = ({ statusCount, loading }) => {
  const tBody = statusCount.map(({ status, count }) => {
    return (
      <tr key={status}>
        <td>{status}</td>
        <td className="status-count-table__count">{count}</td>
      </tr>
    );
  });
  let message = "";
  if (loading) message = "Loading...";
  else if (statusCount.length === 0) message = "No data found";

  return (
    <div>
      <table className="page-table status-count-table">
        <thead>
          <tr>
            <th>Request status</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>{tBody}</tbody>
      </table>
      <div className="page-table-message">{message}</div>
    </div>
  );
};

export default StatusCountTableContainer;
