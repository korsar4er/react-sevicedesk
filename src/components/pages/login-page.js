import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { useRoleActions } from "../../hooks";

const LoginPage = () => {
  const { toggleRole } = useRoleActions();
  let history = useHistory();

  useEffect(() => {
    toggleRole();
    history.push("/");
  });

  return "";
};

export default LoginPage;
