import React from "react";
import { Rating } from "../../";

export default {
  title: "Rating",
  component: Rating,
};

export const Basic = () => {
  const [value, setValue] = React.useState(2);
  return <Rating value={value} onChange={setValue} />;
};
