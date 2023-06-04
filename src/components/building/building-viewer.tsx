import { Box, Button } from "@mui/material";
import { FC, useState } from "react";
import { useAppContext } from "../../middleware/context-provider";
import { Navigate } from "react-router-dom";

export const BuildingViewer: FC = () => {
  const [sideOpen, SetSideOpen] = useState(false);
  const [frontOpen, setFrontOpen] = useState(false);
  const [width] = useState(240);

  const [{ user, building }, dispatch] = useAppContext();

  if (!building) {
    return <Navigate to={"/map"} />;
  }

  return (
    <>
      <Box sx={{ display: "flex" }}></Box>
      <h1>Hello building viewer!</h1>
    </>
  );
};
