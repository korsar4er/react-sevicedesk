import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { ServicedeskService } from "./services";
import ServicedeskServiceContext from "./components/servicedesk-service-context";

import App from "./components/app";

ReactDOM.render(
  <ServicedeskServiceContext.Provider value={new ServicedeskService()}>
    <Router>
      <App />
    </Router>
  </ServicedeskServiceContext.Provider>,
  document.getElementById("root")
);
