import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "../../";

export default {
  title: "Button",
  component: Button,
};

export const ContainedPrimary = () => (
  <Button variant="contained" color="primary" onClick={action("clicked")}>
    Click me
  </Button>
);

export const ContainedSecondary = () => (
  <Button variant="contained" color="secondary" onClick={action("clicked")}>
    Click me
  </Button>
);

export const DisableElevation = () => (
  <Button variant="contained" color="primary" disableElevation onClick={action("clicked")}>
    Click me
  </Button>
);
