import React from "react";
import { Textfield } from "../../";

export default {
  title: "Textfield",
  component: Textfield,
};

export const Filled = () => <Textfield label="Filled" variant="filled" />;

export const Outlined = () => <Textfield label="Outlined" variant="outlined" />;
