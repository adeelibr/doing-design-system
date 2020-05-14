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

export const WithTitle = () => {
  const [open, setOpen] = React.useState(true);
  return (
    <Alert open={open} setOpen={setOpen} onClose={action("clicked")}>
      <AlertTitle>Alert</AlertTitle>
      This is an alert — check it out!
    </Alert>
  );
};

export const WithAction = () => {
  const [open, setOpen] = React.useState(true);
  return (
    <Alert
      open={open}
      setOpen={setOpen}
      action={
        <Button
          variant="contained"
          color="secondary"
          onClick={(e) => {
            setOpen(false);
          }}
        >
          Accept
        </Button>
      }
    >
      This is an alert — check it out!
    </Alert>
  );
};

export const WithActionAndTitle = () => (
  <Alert action={<Button onClick={action("clicked")}>Undo</Button>}>
    <AlertTitle>Alert</AlertTitle>
    This is an alert — check it out!
  </Alert>
);
