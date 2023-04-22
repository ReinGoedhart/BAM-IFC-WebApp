import { FC } from "react";
import { getApp } from "firebase/app";
import { useAppContext } from "../../middleware/context-provider";
import { Button } from "@mui/material";

export const LoginForm: FC = () => {
  const [state, dispatch] = useAppContext();

  const onLogin = () => {
    dispatch({ type: "LOGIN" });
  };
  const onLogOut = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <h1>
      {state.user ? (
        <>
          <p>{state.user.displayName}</p>
          <Button variant="contained" color="primary" onClick={onLogOut}>
            Logout
          </Button>
        </>
      ) : (
        <Button variant="contained" color="primary" onClick={onLogin}>
          Login
        </Button>
      )}
    </h1>
  );
};
