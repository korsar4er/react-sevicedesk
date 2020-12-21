import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "../header";
import Navigation from "../navigation";
import ErrorIndicator from "../error-indicator";
import ProtectedRoute from "../protected-route";
import {
  DashboardPage,
  RequestsPage,
  HomePage,
  RequestDetailsPage,
  LoginPage,
  NewRequestPage,
  EditRequestPage,
  EditRequestStatusPage,
} from "../pages";
import AppContext from "../app-context";
import { routes } from "../../constants";
import { useInitRole } from "../../hooks";

import "./app.css";

const App = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [currentRole, setCurrentRole] = useState(useInitRole());

  return (
    <AppContext.Provider
      value={{ setErrorMessage, currentRole, setCurrentRole }}
    >
      <Header>
        <Navigation />
      </Header>
      <div className="main">
        <Switch>
          <Route path={routes.HOME} component={HomePage} exact />
          <Route path={routes.DASHBOARD} component={DashboardPage} />
          <Route path={routes.REQUESTS} component={RequestsPage} exact />
          <Route
            path={`${routes.REQUESTS}/:id`}
            component={RequestDetailsPage}
          />
          <Route path={routes.LOGIN} component={LoginPage} />
          <Route path={routes.NEW_REQUEST} component={NewRequestPage} />
          <ProtectedRoute
            path={`${routes.EDIT_REQUEST}/:id`}
            component={EditRequestPage}
            role="user"
          />
          <ProtectedRoute
            path={`${routes.EDIT_REQUEST_STATUS}/:id`}
            component={EditRequestStatusPage}
            role="support"
          />
        </Switch>
      </div>
      <ErrorIndicator message={errorMessage} setMessage={setErrorMessage} />
    </AppContext.Provider>
  );
};

export default App;
