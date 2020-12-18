import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { useAppContext, useRequestActions } from "../../hooks";
import LoadingIndicator from "../loading-indicator";

const initRequest = {
  id: "",
  createDate: "",
  username: "",
  subject: "",
  description: "",
  status: "",
  solution: "",
  closeDate: "",
};

const withRequestItem = (Component) => {
  const Wrapped = (props) => {
    const { id, saveItem } = props;

    let history = useHistory();
    const { setErrorMessage } = useAppContext();
    const { getRequestById, getStatuses } = useRequestActions();

    const [request, setRequest] = useState(initRequest);
    const [statuses, setStatuses] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isMount, setIsMount] = useState(true);

    useEffect(() => {
      setLoading(true);
      setErrorMessage("");
      Promise.all([getStatuses(), id ? getRequestById(id) : initRequest])
        .then(([s, r]) => {
          if (isMount) {
            setStatuses(s);
            setRequest(r);
          }
        })
        .catch((err) => {
          if (isMount) {
            setErrorMessage(`Get request item error: ${err.message}`);
          }
        })
        .finally(() => {
          if (isMount) {
            setLoading(false);
          }
        });

      return () => {
        setIsMount(false);
      };
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onChangeRequestProperty = (event) => {
      const { name, value } = event.target;
      setRequest({ ...request, [name]: value });
    };

    const onBack = () => {
      history.goBack();
    };
    const onSave = () => {
      if (!saveItem) return;
      setLoading(true);
      setErrorMessage("");
      saveItem(request)
        .then(() => {
          if (isMount) history.push("/requests");
        })
        .catch((err) => {
          if (isMount) setErrorMessage(`Save request error: ${err.message}`);
        })
        .finally(() => {
          if (isMount) setLoading(false);
        });
    };

    if (loading) return <LoadingIndicator />;

    return (
      <Component
        request={request}
        statuses={statuses}
        onChangeRequestProperty={onChangeRequestProperty}
        onBack={onBack}
        onSave={onSave}
      />
    );
  };
  return Wrapped;
};

export default withRequestItem;
