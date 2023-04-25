import { FC } from "react";
import { getApp } from "firebase/app";
import { useAppContext } from "../../middleware/context-provider";
import { Button } from "@mui/material";
import { Navigate } from "react-router-dom";

export const LoginForm: FC = () => {
  const [state, dispatch] = useAppContext();

  const onLogin = () => {
    dispatch({ type: "LOGIN" });
  };
  const onLogOut = () => {
    dispatch({ type: "LOGOUT" });
  };

if (state.user) {
  return <Navigate to={"/map"}/>
}


  return (
    <h1>
      <Button variant="contained" color="primary" onClick={onLogin}>
        Login
      </Button>
    </h1>
  );
};
