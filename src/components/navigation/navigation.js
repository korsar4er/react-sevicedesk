import React from "react";
import { Link, useLocation } from "react-router-dom";

import * as routes from "../../constants";

import "./navigation.css";

const NavigationContainer = () => {
  const { pathname } = useLocation();

  return <Navigation pathname={pathname} />;
};

const Navigation = ({ pathname }) => {
  return (
    <div className="nav">
      <ul className="menu">
        <li>
          <Link
            className={pathname === routes.DASHBOARD ? "active" : ""}
            to={routes.DASHBOARD}
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            className={pathname === routes.REQUESTS ? "active" : ""}
            to={routes.REQUESTS}
          >
            Requests
          </Link>
        </li>
      </ul>
      <ul className="menu">
        <li>
          <Link to={routes.LOGIN}>toggle role</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavigationContainer;
