import React from "react";

const sizes = {
  "2xl": "text-[42px] font-bold md:text-[38px] sm:text-[32px]",
  xl: "text-3xl font-bold md:text-[28px] sm:text-[26px]",
  s: "text-[19px] font-semibold",
  md: "text-2xl font-semibold md:text-[22px]",
  xs: "text-base font-semibold",
  lg: "text-[26px] font-bold md:text-2xl sm:text-[22px]",
};

const Heading = ({ children, className = "", size = "md", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-800 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
