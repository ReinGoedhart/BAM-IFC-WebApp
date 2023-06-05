import { FC, useState } from "react";
import Box from "@mui/material/Box";
import { BuildingTopbar } from "./side-menus/building-topbar";
import { CssBaseline } from "@mui/material";
import { BuildingDrawer } from "./side-menus/building-drawer";
import { getDrawerHeader } from "./side-menus/mui-utils";
import { useAppContext } from "../../middleware/context-provider";
import { Navigate } from "react-router-dom";
import { FrontMenuMode } from "./front-menu/types";
import { BuildingFrontMenu } from "./front-menu/building-front-menu";

export const BuildingViewer: FC = () => {
  const [width] = useState(240);

  const [sideOpen, setSideOpen] = useState(false);
  const [frontOpen, setFrontOpen] = useState(false);
  const [frontMode, setFrontMode] = useState<FrontMenuMode>("BuildingInfo");

  const [{ building }] = useAppContext();
  if (!building) {
    return <Navigate to="/map" />;
  }

  const toggleFrontMenu = (active: boolean, mode?: FrontMenuMode) => {
    if (mode) {
      setFrontMode(mode);
    }
    setFrontOpen(active);
  };

  const toggleDrawer = (active: boolean) => {
    setSideOpen(active);
  };
  const DrawerHeader = getDrawerHeader();

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <BuildingTopbar
          width={width}
          open={sideOpen}
          onOpen={() => toggleDrawer(true)}
        />

        <BuildingDrawer
          width={width}
          open={sideOpen}
          onClose={() => toggleDrawer(false)}
          onToggleMenu={toggleFrontMenu}
        />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />

          <BuildingFrontMenu
            onToggleMenu={() => toggleFrontMenu(false)}
            open={frontOpen}
            mode={frontMode}
          />
        </Box>
      </Box>
    </>
  );
};
