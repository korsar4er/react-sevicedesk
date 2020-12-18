import React, { useContext } from "react";
import { Link } from "react-router-dom";

import AppContext from "../app-context";
import * as routes from "../../constants";

import "./header.css";

const HeaderContainer = ({ children }) => {
  const { currentRole } = useContext(AppContext);

  return <Header children={children} roleName={currentRole} />;
};

const Header = ({ children, roleName }) => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__row">
          <Link className="header__logo" to={routes.HOME}>
            ServiceDesk
          </Link>
          <div className="header__role">
            Current role: <span className="header__role-name">{roleName}</span>
          </div>
        </div>

        {children}
      </div>
    </div>
  );
};

export default HeaderContainer;
