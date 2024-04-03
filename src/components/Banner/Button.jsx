import React from "react";
import PropTypes from "prop-types";

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,

  ...restProps
}) => {
  return (
    <button className={`${className} undefined`} {...restProps}>
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
};

export { Button };
