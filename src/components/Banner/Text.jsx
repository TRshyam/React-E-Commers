import React from "react";

const sizes = {
  xs: "text-sm font-medium",
  lg: "text-[19px] font-normal",
  s: "text-base font-normal",
  "2xl": "text-[25px] font-normal md:text-[23px] sm:text-[21px]",
  "3xl": "text-[26px] font-medium md:text-2xl sm:text-[22px]",
  "4xl": "text-[76px] font-normal md:text-5xl",
  xl: "text-xl font-normal",
  md: "text-lg font-medium",
};

const Text = ({ children, className = "", as, size = "xl", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-white-A700 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
