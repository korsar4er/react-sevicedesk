import React from "react";
import { Link } from "react-router-dom";

import * as routes from "../../constants";

import "./create-request-button.css";

const CreateRequestButton = () => {
  return (
    <Link to={routes.NEW_REQUEST} className="pages-create">
      Create request
    </Link>
  );
};

export default CreateRequestButton;
