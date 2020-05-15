import React from "react";
import PropTypes from "prop-types";
// Material-UI Components
import { makeStyles } from "@material-ui/core";
import MuiButton from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      height: theme.spacing(7), // applied to size="medium"
      padding: theme.spacing(3, 4),
      borderRadius: theme.spacing(2),
    },
    contained: {
      backgroundColor: ({ color }) => theme.palette[color]?.main,
      color: ({ color }) => theme.palette[color]?.contrastText,
      "&:hover": {
        backgroundColor: ({ color }) => theme.palette[color]?.dark,
      },
    },
    outlined: {
      color: ({ color }) => theme.palette[color]?.dark,
    },
    sizeSmall: {
      height: theme.spacing(7),
    },
    sizeLarge: {
      height: theme.spacing(7),
    },
  };
});

const Button = React.forwardRef((props, ref) => {
  const { color, ...other } = props;
  const classes = useStyles({ color });
  return (
    <MuiButton
      classes={{
        root: classes.root,
        contained: classes.contained,
        outlined: classes.outlined,
        sizeSmall: classes.sizeSmall,
        sizeLarge: classes.sizeLarge,
      }}
      {...other}
    />
  );
});

Button.defaultProps = {
  variant: "contained",
  size: "medium",
};

Button.propTypes = {
  /** The variant to use. */
  variant: PropTypes.oneOf(["contained", "outlined"]),
  /** The size of the button. small is equivalent to the dense button styling. */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /** The color of the component. It supports those theme colors that make sense for this component. */
  color: PropTypes.oneOf(["primary", "secondary", "tertiary", "warning", "danger", "success"]),
  /** If true, the button will be disabled. */
  disabled: PropTypes.bool,
};

export default Button;
