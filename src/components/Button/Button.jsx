import React from "react";
import {
  node,
  string,
  func,
  oneOf,
  bool,
  oneOfType,
  arrayOf
} from "prop-types";
import classNames from "classnames";

import { Icon } from "../";

const Button = ({
  children,
  label,
  icon,
  onClick,
  role,
  color,
  disabled,
  loading,
  outline,
  extraClassName,
  block
}) => (
  <button
    className={classNames("Btn", `${color}`, {
      outline,
      extraClassName,
      block
    })}
    onClick={onClick}
    type={role}
    disabled={disabled || loading ? true : disabled}
  >
    {children ? (
      children
    ) : (
      <div className="Btn-label">
        {icon && <Icon name={icon} loading={loading} />}
        {label && <span>{label}</span>}
      </div>
    )}
  </button>
);

Button.propTypes = {
  children: node,
  label: string,
  icon: oneOfType([string, arrayOf(string)]),
  onClick: func,
  role: oneOf(["button", "submit"]), // Default to button
  color: oneOf(["default", "primary", "success", "danger", "warning", "info"]),
  disabled: bool,
  loading: bool,
  outline: bool,
  extraClassName: string,
  block: bool
};

Button.defaultProps = {
  children: null,
  label: "",
  icon: null,
  onClick: () => {},
  role: "button",
  color: "default",
  disabled: false,
  loading: false,
  outline: false,
  extraClassName: "",
  block: false
};

export default Button;
