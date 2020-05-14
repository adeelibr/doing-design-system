import React from "react";
// Material-UI Components
import Collapse from "@material-ui/core/Collapse";
import MuiAlert from "@material-ui/lab/Alert";

const Alert = React.forwardRef((props, ref) => {
  const { onClose, ...other } = props;
  const [open, setOpen] = React.useState(true);
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
        {...other}
        variant="filled"
      />
    </Collapse>
  );
});

export default Alert;
