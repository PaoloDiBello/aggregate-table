import { common } from "@mui/material/colors";
import { error, indigo, info, neutral, success, warning } from "./colors";

export function createPalette() {
  return {
    action: {
      active: neutral[500],
    },
    background: {
      default: common.white,
      paper: common.white,
    },
    divider: "#F2F4F7",
    error,
    info,
    mode: "light",
    neutral,
    primary: indigo,
    success,
    text: {
      primary: neutral[900],
      secondary: neutral[500],
    },
    warning,
  };
}
