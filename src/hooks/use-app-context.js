import { useContext } from "react";

import AppContext from "../components/app-context";

const useAppContext = () => useContext(AppContext);

export default useAppContext;
