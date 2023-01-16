import React from "react";

import { Spinner } from "react-bootstrap";
import "./Button.css";

const Button = ({
  name = "",
  variant = "btnPrimary",
  className = "",
  type = "",
  style = {},
  isLoading = false,
  ...props
}) => {
  return (
    <button
      className={`button-container ${className} ${variant}`}
      type={type}
      style={style}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? <Spinner animation="border" /> : name}
    </button>
  );
};

export default Button;
