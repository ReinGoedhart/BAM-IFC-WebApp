import { FC, useEffect, useRef } from "react";
import { useAppContext } from "../../middleware/context-provider";
import { Navigate } from "react-router-dom";

export const MapViewer: FC = () => {
  const [state, dispatch] = useAppContext();
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas && state.user) {
      dispatch({ type: "START_MAP", payload: canvas });
    }
    return () => {
      dispatch({ type: "REMOVE_MAP" });
    };
  }, []);

  if (!state.user) {
    return <Navigate to={"/login"} />;
  }

  return <h1>Hello map viewer!</h1>;
};
