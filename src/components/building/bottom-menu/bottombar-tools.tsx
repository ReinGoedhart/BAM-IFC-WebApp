import { Action } from "../../../middleware/actions";
import { State } from "../../../middleware/state";
import CutIcon from "@mui/icons-material/ContentCut";
import RulersIcon from "@mui/icons-material/Straighten";
import ExplodeIcon from "@mui/icons-material/ImportExport";

interface Tool {
  name: string;
  icon: any;
  action: () => void;
}

export function getBottombarTools(
  state: State,
  dispatch: React.Dispatch<Action>
): Tool[] {
  return [
    {
      name: "Clipping planes",
      icon: <CutIcon />,
      action: () => {
        console.log("Cutting With Planes!");
      },
    },
    {
      name: "Dimensions",
      icon: <RulersIcon />,
      action: () => {
        console.log("measuring model!");
      },
    },
    {
      name: "Explosion",
      icon: <ExplodeIcon />,
      action: () => {
        console.log("Exploding model!");
      },
    },
  ];
}
