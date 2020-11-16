import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
const Button = ({ children, className, onClick }) => {
  return (
    <button onClick={onClick} className={classNames("button", className)}>
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};
export default Button;
