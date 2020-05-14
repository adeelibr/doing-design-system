import React from "react";
import { action } from "@storybook/addon-actions";
import { Alert, AlertTitle, Button } from "../../";

export default {
  title: "Alert",
  component: Alert,
  subcomponents: { AlertTitle },
};

export const Variant = () => (
  <React.Fragment>
    <Alert severity="error">This is an error alert — check it out!</Alert>
    <Alert severity="warning">This is a warning alert — check it out!</Alert>
    <Alert severity="info">This is an info alert — check it out!</Alert>
    <Alert severity="success">This is a success alert — check it out!</Alert>
  </React.Fragment>
);

export const WithTitle = () => (
  <Alert onClose={action("clicked")}>
    <AlertTitle>Alert</AlertTitle>
    This is an alert — check it out!
  </Alert>
);

export const WithAction = () => (
  <Alert onClose={action("clicked")} action={<Button>Undo</Button>}>
    This is an alert — check it out!
  </Alert>
);

export const WithActionAndTitle = () => (
  <Alert onClose={action("clicked")} action={<Button>Undo</Button>}>
    <AlertTitle>Alert</AlertTitle>
    This is an alert — check it out!
  </Alert>
);
