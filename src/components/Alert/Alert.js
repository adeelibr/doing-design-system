import React from "react";
// Material-UI Components
import { makeStyles } from "@material-ui/core/styles";
import Collapse from "@material-ui/core/Collapse";
import MuiAlert from "@material-ui/lab/Alert";

const useStyles = makeStyles(() => {
  return {
    root: {
      borderRadius: 0,
    },
  };
});

const Alert = React.forwardRef((props, ref) => {
  const { open = true, setOpen = () => {}, onClose, ...other } = props;
  const classes = useStyles();
  return (
    <Collapse in={open}>
      <MuiAlert
        ref={ref}
        {...(onClose && {
          onClose: () => {
            onClose();
            setOpen(false);
          },
        })}
        classes={{
          root: classes.root,
        }}
        {...other}
        variant="filled"
      />
    </Collapse>
  );
});

export default Alert;
