import { Card, IconButton } from "@mui/material";
import { FC } from "react";
import "./building-bottom-menu.css";
import { getBottombarTools } from "./bottombar-tools";
import { useAppContext } from "../../../middleware/context-provider";

export const BuildingBottomMenu: FC = () => {
  const [state, dispatch] = useAppContext();
  const tools = getBottombarTools(state, dispatch);

  return (
    <Card className="bottom-menu">
      {tools.map((tool) => (
        <IconButton onClick={tool.action} key={tool.name}>
          {tool.icon}
        </IconButton>
      ))}
    </Card>
  );
};
