import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    custom: {
      severityCritical: string;
      severityHigh: string;
      severityMedium: string;
      severityLow: string;
      chipCritical: string;
      chipHigh: string;
      chipMedium: string;
      chipLow: string;
      chipYellow: string;
      chipRed: string;
      chipDarkRed: string;
      chipOrange: string;
      chipGreen: string;
      chipGray: string;
      sidebarHover: string;
      scrollbarThumb: string;
      borderHeader: string;
      sidebarDivider: string;
      msDefender: string;
      arcticWolf: string;
      arcticWolfIcon: string;
      arcticWolfBar: string;
      pieMsDefender: string;
      pieArcticWolf: string;
      yellow: string;
      green: string;
      orange: string;
      red: string;
      darkRed: string;
      textCritical: string;
      textHigh: string;
      textMedium: string;
      textLow: string;
      textNumber: string;
      textSourceNumber: string;
      grayScale6: string;
    };
  }
  interface PaletteOptions {
    custom?: {
      severityCritical?: string;
      severityHigh?: string;
      severityMedium?: string;
      severityLow?: string;
      chipCritical?: string;
      chipHigh?: string;
      chipMedium?: string;
      chipLow?: string;
      chipYellow?: string;
      chipRed?: string;
      chipDarkRed?: string;
      chipOrange?: string;
      chipGreen?: string;
      chipGray?: string;
      sidebarHover?: string;
      scrollbarThumb?: string;
      borderHeader?: string;
      msDefender?: string;
      arcticWolf?: string;
      arcticWolfIcon?: string;
      arcticWolfBar?: string;
      pieMsDefender?: string;
      pieArcticWolf?: string;
      yellow?: string;
      green?: string;
      orange?: string;
      red?: string;
      darkRed?: string;
      textCritical?: string;
      textHigh?: string;
      textMedium?: string;
      textLow?: string;
      textNumber?: string;
      textSourceNumber?: string;
      grayScale6?: string;
      sidebarDivider?: string;
    };
  }
}

const theme = createTheme({
  typography: {
    fontFamily: "'Roboto', Arial, Helvetica, sans-serif",
  },
  palette: {
    mode: "light",
    primary: {
      main: "#416BFF",
      contrastText: "#0B60EB",
      dark: "#1976d2",
    },
    secondary: {
      main: "#383874",
    },
    background: {
      default: "#f7f8fa",
      paper: "#fff",
    },
    text: {
      primary: "#383874",
      secondary: "#9A9AAF",
      disabled: "#B8B4CC",
    },
    error: {
      main: "#FF2D2E",
    },
    warning: {
      main: "#FAA24B",
    },
    info: {
      main: "#416BFF",
    },
    success: {
      main: "#53CA43",
    },
    custom: {
      // Severity
      severityCritical: "#BA0001",
      severityHigh: "#FF2D2E",
      severityMedium: "#FAA24B",
      severityLow: "#53CA43",
      // Chips
      chipCritical: "#fdeaea",
      chipHigh: "#fff3e0",
      chipMedium: "#fffde7",
      chipLow: "#e8f5e9",
      chipYellow: "rgba(249, 211, 61, 0.15)",
      chipRed: "rgba(255, 45, 46, 0.1)",
      chipDarkRed: "rgba(186, 0, 1, 0.1)",
      chipOrange: "rgba(250, 162, 75, 0.1)",
      chipGreen: "rgba(83, 202, 67, 0.1)",
      chipGray: "#F2F3F7",
      // Sidebar, scrollbar, border
      sidebarHover: "rgba(65, 107, 255, 0.1)",
      scrollbarThumb: "rgba(56, 56, 116, 0.35)",
      borderHeader: "#E2E2EA",
      sidebarDivider: "rgba(108, 105, 255, 0.25)",
      // Source & Pie
      msDefender: "#5694FF",
      arcticWolf: "#225B7C",
      arcticWolfIcon: "#236092",
      arcticWolfBar: "#23618E",
      pieMsDefender: "#5B9BFF",
      pieArcticWolf: "#225B7C",
      // Misc
      yellow: "#F9D33D",
      green: "#53CA43",
      orange: "#FAA24B",
      red: "#FF2D2E",
      darkRed: "#BA0001",
      // Text
      textCritical: "#c62828",
      textHigh: "#ef6c00",
      textMedium: "#fbc02d",
      textLow: "#388e3c",
      textNumber: "#1A2257",
      textSourceNumber: "#656575",
      // GrayScale
      grayScale6: "#7E7E8F",
    },
  },
});

export default theme;
