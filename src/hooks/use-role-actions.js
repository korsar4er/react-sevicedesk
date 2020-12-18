import { useAppContext } from "../hooks";

const useRoleActions = () => {
  const { currentRole, setCurrentRole } = useAppContext();

  const toggleRole = () => {
    const role = currentRole === "user" ? "support" : "user";
    setCurrentRole(role);
    localStorage.setItem("userRole", role);

    return role;
  };

  return { toggleRole };
};

export default useRoleActions;
