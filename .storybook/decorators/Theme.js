import React from "react";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import Theme from "../../src/components/Theme";

const ThemeWrapper = (Story) => (
  <>
    <CssBaseline />
    <ThemeProvider theme={Theme}>
      <Story />
    </ThemeProvider>
  </>
);

export default ThemeWrapper;
