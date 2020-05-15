import React from "react";
import { Alert, AlertTitle, Button } from "../../";
import { Box } from "@material-ui/core";

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
  return (
    <Alert>
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
      severity="warning"
      action={
        <>
          <Button color="tertiary" onClick={() => setOpen(false)}>
            Accept
          </Button>
          <Box mr={3} />
          <Button color="danger" onClick={() => setOpen(false)}>
            Reject
          </Button>
        </>
      }
    >
      This is an alert — check it out!
    </Alert>
  );
};

export const WithTitleAndAction = () => {
  const [open, setOpen] = React.useState(true);
  return (
    <Alert
      open={open}
      action={
        <Button color="tertiary" onClick={() => setOpen(false)}>
          Undo
        </Button>
      }
    >
      <AlertTitle>Alert</AlertTitle>
      This is an alert — check it out!
    </Alert>
  );
};
