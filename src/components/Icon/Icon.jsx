import React from "react";
import { string, oneOfType, arrayOf } from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = ({ name, className }) => (
  <FontAwesomeIcon icon={name} className={className} />
);

Icon.propTypes = {
  name: oneOfType([string.isRequired, arrayOf(string.isRequired)]).isRequired,
  className: string
};

Icon.defaultProps = {
  className: undefined
};

export default Icon;
