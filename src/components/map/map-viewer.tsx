import { FC, useEffect, useRef, useState } from "react";
import { useAppContext } from "../../middleware/context-provider";
import { Navigate } from "react-router-dom";
import { Button } from "@mui/material";

export const MapViewer: FC = () => {
  const containerRef = useRef(null);
  const [isCreating, setIsCreating] = useState(false);

  const [state, dispatch] = useAppContext();
  const { user } = state;

  const onToggleCreate = () => {
    setIsCreating(!isCreating);
  };

  const onCreate = () => {
    if (isCreating) {
      dispatch({ type: "ADD_BUILDING", payload: user });
      setIsCreating(false);
      //..

      setIsCreating(false);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container && state.user) {
      dispatch({ type: "START_MAP", payload: { container, user } });
    }
    return () => {
      dispatch({ type: "REMOVE_MAP" });
    };
  }, []);

  const onLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  if (!state.user) {
    return <Navigate to={"/login"} />;
  }

  return (
    <>
      <div className="full-screen" ref={containerRef} />
      <Button variant="contained" color="primary" onClick={onLogout}>
        Logout
      </Button>
      <h1>Hello map viewer!</h1>
    </>
  );
};
