import React from "react";

import StatusCountTable from "../status-count-table";

import "./pages.css";
import "./dashboard-page.css";

const DashboardPage = () => {
  return (
    <div className="dashboard">
      <h1 className="page-header">Dashboard</h1>
      <StatusCountTable />
    </div>
  );
};

export default DashboardPage;
