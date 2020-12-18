const useInitRole = () => {
  const role = localStorage.getItem("userRole");

  return role ? role : "user";
};

export default useInitRole;
