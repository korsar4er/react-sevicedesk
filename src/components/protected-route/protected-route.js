import React from "react";
import { Route } from "react-router-dom";

import { useAppContext } from "../../hooks";
import AccessDeniedIndicator from "../access-denied-indicator";

const ProtectedRoute = ({ component: Component, role, ...rest }) => {
  const { currentRole } = useAppContext();
  return (
    <Route
      {...rest}
      render={() => {
        if (currentRole === role) return <Component />;
        else return <AccessDeniedIndicator />;
      }}
    />
  );
};

export default ProtectedRoute;
