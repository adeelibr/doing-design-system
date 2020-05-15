// Material-UI Components
import { createMuiTheme } from "@material-ui/core/styles";
// Helpers
import { makePalette } from "./helpers";

const palette = {
  primary: makePalette({ main: "#3535FF", dark: "#2020B9", light: "#6868FF" }),
  secondary: makePalette({
    main: "#F3F4F4",
    dark: "#DBDFE0",
    light: "#FFF",
    contrastText: "#474B4D",
  }),
  tertiary: makePalette({
    main: "#FFFFFF",
    dark: "#DBDFE0",
    light: "#FFFFFF",
    contrastText: "#3535FF",
  }),
  danger: makePalette({ main: "#E02020", dark: "#981515", light: "#E85858" }),
  success: makePalette({ main: "#6DD400", dark: "#58921A", light: "#92DF40" }),
  warning: makePalette({ main: "#F7B500", dark: "#B38917", light: "#F9C840" }),
};

const spacing = [0, 2, 4, 8, 16, 24, 32, 40, 48, 64, 80, 120];

const typography = {
  h1: { fontWeight: 300, fontSize: "4.5rem", lineHeight: "5.625rem" },
  h2: { fontWeight: 300, fontSize: "3.75rem", lineHeight: "5.625rem" },
  h3: { fontWeight: 400, fontSize: "3rem", lineHeight: "4.5rem" },
  h4: { fontWeight: 400, fontSize: "2.125rem", lineHeight: "2.5rem" },
  h5: { fontWeight: 400, fontSize: "1.5rem", lineHeight: "2.5rem" },
  h6: { fontWeight: 500, fontSize: "1.25rem", lineHeight: "2.5rem" },
  subtitle1: { fontWeight: 400, fontSize: "1rem", lineHeight: "2rem" },
  subtitle2: { fontWeight: 400, fontSize: "0.875rem", lineHeight: "1.5rem" },
  body1: { fontWeight: 400, fontSize: "1rem", lineHeight: "1.5rem" },
  body2: { fontWeight: 400, fontSize: "0.875rem", lineHeight: "1.5rem" },
  caption: { fontWeight: 400, fontSize: "0.75rem", lineHeight: "1rem" },
  overline: { fontWeight: 400, fontSize: "0.625rem", lineHeight: "1rem" },
};

const theme = {
  palette: {
    primary: { ...palette.primary },
    secondary: { ...palette.secondary },
    tertiary: { ...palette.tertiary },
    danger: { ...palette.danger },
    success: { ...palette.success },
    warning: { ...palette.warning },
  },
  typography: { ...typography },
  spacing: [...spacing],
};

export default createMuiTheme(theme);
export const DesignSystem = { palette, spacing, typography };
