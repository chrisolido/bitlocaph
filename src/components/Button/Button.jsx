import React from "react";
import { oneOfType, string, arrayOf } from "prop-types";

import Icon from "../Icon";

const Button = ({ icon, label }) => (
  <button className="Button">
    <Icon name={icon} />
    <span>{label}</span>
  </button>
);

Button.propTypes = {
  icon: oneOfType([string, arrayOf(string)]),
  label: string.isRequired
};

export default Button;
