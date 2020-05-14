import React from "react";
import { Rating } from "../../";

export default {
  title: "Rating",
  component: Rating,
};

export const Small = () => {
    const [value, setValue] = React.useState(2);
    return (
      <Rating 
        value={value}
        onChange={setValue}
        size="small"
      />
    );
};

export const Medium = () => {
    const [value, setValue] = React.useState(3);
    return (
      <Rating 
        value={value}
        onChange={setValue}
        size="medium"
      />
    );
};

export const Large = () => {
    const [value, setValue] = React.useState(4.5);
    return (
      <Rating 
        value={value}
        onChange={setValue}
        size="large"
      />
    );
};
