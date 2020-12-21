import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { useAppContext, useRequestActions } from "../../hooks";
import { routes } from "../../constants";

const withRequestList = (Component) => {
  const Wrapped = (props) => {
    const { setErrorMessage, currentRole } = useAppContext();
    const { getAllRequests, removeRequest } = useRequestActions();
    let history = useHistory();

    const [requestList, setRequestList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isMount, setIsMount] = useState(true);

    const updateRequestList = () => {
      setLoading(true);
      setErrorMessage("");
      getAllRequests()
        .then((items) => {
          if (isMount) {
            setRequestList(items);
            setLoading(false);
          }
        })
        .catch((err) => {
          if (isMount) {
            setErrorMessage(`Get requests error: ${err.message}`);
            setRequestList([]);
            setLoading(false);
          }
        });
    };

    useEffect(() => {
      updateRequestList();
      return () => {
        setIsMount(false);
      };
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onRemoveRequest = (id) => {
      if (currentRole === "support") {
        setErrorMessage("Access denied to remove request with role Support!");
        return;
      }
      setLoading(true);
      removeRequest(id)
        .then(() => {
          setLoading(false);
          updateRequestList();
        })
        .catch((err) => {
          setLoading(false);
          setErrorMessage(err.message);
        });
    };

    const onEditRequest = (id) => {
      if (currentRole === "support")
        history.push(`${routes.EDIT_REQUEST_STATUS}/${id}`);
      else history.push(`${routes.EDIT_REQUEST}/${id}`);
    };

    return (
      <Component
        {...props}
        requestList={requestList}
        loading={loading}
        onRemoveRequest={onRemoveRequest}
        onEditRequest={onEditRequest}
      />
    );
  };
  return Wrapped;
};

export default withRequestList;
