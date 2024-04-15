import React from "react";

const sizes = {
  xs: "text-sm font-medium",
  lg: "text-lg font-normal",
  s: "text-base font-normal",
  "2xl": "text-2xl font-normal md:text-xl sm:text-lg",
  "3xl": "text-2xl font-medium md:text-lg sm:text-base",
  "4xl": "text-4xl font-normal md:text-3xl",
  xl: "text-xl font-normal",
  md: "text-md font-medium",
};

const Text = ({ children, className = "", as, size = "xl", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-white-A700 font-poppins text-slate-950 ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
