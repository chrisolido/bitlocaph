import React from "react";
import { string, oneOfType, arrayOf } from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = ({ name, className, size }) => (
  <FontAwesomeIcon icon={name} className={className} size={size} />
);

Icon.propTypes = {
  name: oneOfType([string.isRequired, arrayOf(string.isRequired)]).isRequired,
  className: string,
  size: string
};

Icon.defaultProps = {
  className: undefined,
  size: "sm"
};

export default Icon;
