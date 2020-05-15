import React from "react";
import PropTypes from 'prop-types';
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
  const { open } = props;
  const classes = useStyles();
  return (
    <Collapse in={open}>
      <MuiAlert
        ref={ref}
        classes={{
          root: classes.root,
        }}
        variant="filled"
        {...props}
      />
    </Collapse>
  );
});

Alert.defaultProps = {
  open: true,
}

Alert.propTypes = {
  /** If true, show alert */
  open: PropTypes.bool,
  /** If func provided show cross icon */
  onClose: PropTypes.func,
};

export default Alert;
