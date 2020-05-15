import React from 'react';
import PropTypes from 'prop-types';
// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import MuiChip from '@material-ui/core/Chip';

const useStyle = makeStyles(theme => {
  const getShade = (color, light, dark) => {
    const lightPalette = ['default', 'secondary', 'tertiary'];
    const isLight = lightPalette.some(item => item === color);
    return isLight
      ? fade(theme.palette.text.primary, light)
      : fade(theme.palette.text.secondary, dark);
  };
  return {
    root: {
      color: ({ color }) => theme.palette[color]?.contrastText,
      backgroundColor: ({ color }) => theme.palette[color]?.main,
      borderRadius: theme.spacing(2),
      height: theme.spacing(5),
      '&:hover': {
        color: ({ color }) => theme.palette[color]?.contrastText,
        backgroundColor: ({ color }) => theme.palette[color]?.dark,
      },
      '& $avatar': {
        width: theme.spacing(4),
        height: theme.spacing(4),
        color: ({ color }) => theme.palette[color]?.contrastText,
      },
    },
    icon: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(-2),
      color: ({ color }) => getShade(color, 0.6, 0.8),
    },
    label: {
      padding: theme.spacing(0, 3),
    },
    deleteIcon: {
      width: theme.spacing(4),
      height: theme.spacing(4),
      color: ({ color }) => getShade(color, 0.2, 0.6),
      '&:hover': {
        color: ({ color }) => getShade(color, 0.4, 0.8),
      },
    },
    /* Pseudo-class applied to the root element if `avatar` prop provided. */
    avatar: {
      color: ({ color }) => theme.palette[color]?.contrastText,
    },
  };
});

function Chip({ color = 'default', icon: iconProp, ...props }) {
  const classes = useStyle({ color });

  let icon = null;
  if (iconProp && React.isValidElement(iconProp)) {
    icon = React.cloneElement(iconProp, { fontSize: 'small' });
  }

  return (
    <MuiChip
      {...props}
      icon={icon}
      color="default"
      clickable
      disableRipple
      classes={{
        root: classes.root,
        avatar: classes.avatar,
        icon: classes.icon,
        label: classes.label,
        deleteIcon: classes.deleteIcon,
      }}
      data-test-id="chip"
    />
  );
}

Chip.propTypes = {
  /** String, variant from the color palette */
  color: PropTypes.oneOf([
    'default',
    'primary',
    'secondary',
    'tertiary',
    'danger',
    'warning',
    'success',
  ]),
  /** Content of the label. */
  label: PropTypes.node,
  /** If true, the chip is displayed in a Disabled state. */
  disabled: PropTypes.bool,
  /** Avatar element */
  avatar: PropTypes.element,
  /** Icon element */
  icon: PropTypes.element,
  /** Callback function fired when the icon is clicked. */
  onClick: PropTypes.func,
  /** Callback function fired when the delete icon is clicked. If set, the delete icon is shown. */
  onDelete: PropTypes.func,
};

export default Chip;
