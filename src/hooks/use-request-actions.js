import { useContext } from "react";

import ServicedeskServiceContext from "../components/servicedesk-service-context";

const useRequestActions = () => {
  const servicedeskService = useContext(ServicedeskServiceContext);

  const getAllRequests = () => {
    return servicedeskService.getAllRequests();
  };
  const addRequest = (request) => {
    return servicedeskService.addRequest(request);
  };
  const removeRequest = (id) => {
    return servicedeskService.removeRequest(id);
  };
  const getRequestById = (id) => {
    return servicedeskService.getRequestById(id);
  };
  const updateRequest = (request) => {
    return servicedeskService.updateRequest(request);
  };
  const getStatuses = () => {
    return servicedeskService.getStatuses();
  };

  return {
    getAllRequests,
    addRequest,
    removeRequest,
    getRequestById,
    updateRequest,
    getStatuses,
  };
};

export default useRequestActions;
