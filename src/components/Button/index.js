import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder23: "rounded-radius235",
  RoundedBorder10: "rounded-radius10",
  RoundedBorder5: "rounded-radius5",
};
const variants = {
  FillBluegray900: "bg-bluegray_900 text-white_A700",
  OutlineBlack9003f: "bg-cyan_800_b2 text-orange_51",
  FillYellow900: "bg-yellow_900 text-white_A700",
  FillRed600: "bg-red_600 text-white_A700",
  FillCyan800: "bg-cyan_800",
  FillOrange100: "bg-orange_100",
  FillIndigo500b2: "bg-indigo_500_b2 text-orange_51",
};
const sizes = {
  sm: "p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px]",
  md: "xl:p-[11px] p-[13px] 3xl:p-[15px] lg:p-[9px]",
  lg: "lg:p-[14px] xl:p-[17px] p-[20px] 3xl:p-[24px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
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
  shape: PropTypes.oneOf([
    "RoundedBorder23",
    "RoundedBorder10",
    "RoundedBorder5",
  ]),
  variant: PropTypes.oneOf([
    "FillBluegray900",
    "OutlineBlack9003f",
    "FillYellow900",
    "FillRed600",
    "FillCyan800",
    "FillOrange100",
    "FillIndigo500b2",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};
Button.defaultProps = {
  className: "",
  shape: "",
  variant: "FillBluegray900",
  size: "md",
};

export { Button };