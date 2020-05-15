import React from "react";
import PropTypes from "prop-types";
// Material-UI Components
import Box from "@material-ui/core/Box";
import MuiRating from "@material-ui/lab/Rating";
import { makeStyles } from '@material-ui/core/styles';
// Material-UI Icons
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@material-ui/icons/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@material-ui/icons/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
});

const CUSTOM_ICONS = {
  0.5: {
    icon: <SentimentVeryDissatisfiedIcon />,
    label: "Very Very Dissatisfied",
  },
  1: {
    icon: <SentimentVeryDissatisfiedIcon />,
    label: "Very Dissatisfied",
  },
  1.5: {
    icon: <SentimentVeryDissatisfiedIcon />,
    label: "Very Dissatisfied",
  },
  2: {
    icon: <SentimentDissatisfiedIcon />,
    label: "Dissatisfied",
  },
  2.5: {
    icon: <SentimentDissatisfiedIcon />,
    label: "Dissatisfied",
  },
  3: {
    icon: <SentimentSatisfiedIcon />,
    label: "Neutral",
  },
  3.5: {
    icon: <SentimentSatisfiedIcon />,
    label: "Neutral",
  },
  4: {
    icon: <SentimentSatisfiedAltIcon />,
    label: "Satisfied",
  },
  4.5: {
    icon: <SentimentSatisfiedAltIcon />,
    label: "Satisfied",
  },
  5: {
    icon: <SentimentVerySatisfiedIcon />,
    label: "Very Satisfied",
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{CUSTOM_ICONS[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

function Rating(props) {
  const { value, onChange } = props;
  const [hover, setHover] = React.useState(-1);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <MuiRating
        name="customized-icons"
        // precision={0.5}
        value={value}
        onChange={(event, newValue) => {
          onChange(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        getLabelText={(value) => CUSTOM_ICONS[value].label}
        IconContainerComponent={IconContainer}
      />
      {value !== null && (
        <Box ml={2}>{CUSTOM_ICONS[hover !== -1 ? hover : value].label}</Box>
      )}
    </div>
  );
}

Rating.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func,
};

export default Rating;
