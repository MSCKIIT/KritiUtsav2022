import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  OutlineBlack90051: "bg-bluegray_900_66",
  OutlineBlack90051_1: "bg-pink_900_68",
  OutlinePink900: "bg-orange_100 border-2 border-pink_900 border-solid",
  OutlinePink900_1: "bg-orange_100 border border-pink_900 border-solid",
  OutlineOrange300: "border border-orange_300 border-solid",
  OutlineBluegray900:
    "bg-orange_300_6b border-2 border-bluegray_900 border-solid",
};
const shapes = {
  RoundedBorder17: "rounded-radius175",
  RoundedBorder5: "rounded-radius5",
};
const sizes = {
  sm: "lg:p-[5px] xl:p-[7px] p-[8px] 3xl:p-[9px]",
  md: "xl:p-[8px] 3xl:px-[10px] lg:px-[6px] px-[9px] py-[10px] 3xl:py-[12px] lg:py-[7px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["RoundedBorder17", "RoundedBorder5"]),
  variant: PropTypes.oneOf([
    "OutlineBlack90051",
    "OutlineBlack90051_1",
    "OutlinePink900",
    "OutlinePink900_1",
    "OutlineOrange300",
    "OutlineBluegray900",
  ]),
  size: PropTypes.oneOf(["sm", "md"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "",
  variant: "OutlineBlack90051",
  size: "md",
};

export { Input };
