import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-none",
  round: "rounded-[22px]",
  circle: "rounded-[50%]",
};
const variants = {
  fill: {
    gray_300_01: "bg-gray-300_01",
    red_400_33: "bg-red-400_33 text-red-400",
    blue_gray_900: "bg-blue_gray-900 text-white-A700",
    white_A700: "bg-white-A700",
    gray_900_01: "bg-gray-900_01",
    orange_600: "bg-orange-600 text-white-A700",
    green_500_19: "bg-green-500_19 text-green-A700",
    gray_200: "bg-gray-200",
    green_700_19: "bg-green-700_19",
    green_700_33: "bg-green-700_33 text-green-800",
    green_A700_19: "bg-green-A700_19",
    gray_300_03: "bg-gray-300_03",
    gray_100: "bg-gray-100 text-gray-900_01",
    green_A700: "bg-green-A700 text-white-A700",
  },
};
const sizes = {
  xs: "p-1",
  sm: "p-[7px]",
  md: "p-2.5",
  lg: "p-[13px]",
  xl: "p-4",
  "2xl": "p-[19px]",
  "3xl": "p-[22px] sm:px-5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round", "circle"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "2xl", "3xl"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "gray_300_01",
    "red_400_33",
    "blue_gray_900",
    "white_A700",
    "gray_900_01",
    "orange_600",
    "green_500_19",
    "gray_200",
    "green_700_19",
    "green_700_33",
    "green_A700_19",
    "gray_300_03",
    "gray_100",
    "green_A700",
  ]),
};

export { Button };
