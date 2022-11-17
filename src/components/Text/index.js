import React from "react";
const variantClasses = {
  h1: "font-extrabold lg:text-[49px] xl:text-[62px] text-[70px] 3xl:text-[84px]",
  h2: "font-extrabold lg:text-[35px] xl:text-[44px] text-[50px] 3xl:text-[60px]",
  h3: "font-extrabold lg:text-[31px] xl:text-[39px] text-[44px] 3xl:text-[52px]",
  h4: "font-extrabold lg:text-[28px] xl:text-[35px] text-[40px] 3xl:text-[48px]",
  h5: "font-semibold lg:text-[24px] xl:text-[31px] text-[35px] 3xl:text-[42px]",
  h6: "font-extrabold lg:text-[22px] xl:text-[28px] text-[32px] 3xl:text-[38px]",
  body1: "lg:text-[21px] xl:text-[26px] text-[30px] 3xl:text-[36px]",
  body2: "lg:text-[17px] xl:text-[22px] text-[25px] 3xl:text-[30px]",
  body3: "lg:text-[15px] xl:text-[19px] text-[22px] 3xl:text-[26px]",
  body4: "lg:text-[14px] xl:text-[17px] text-[20px] 3xl:text-[24px]",
  body5: "lg:text-[12px] xl:text-[16px] text-[18px] 3xl:text-[21px]",
  body6: "lg:text-[10px] xl:text-[13px] text-[15px] 3xl:text-[18px]",
  body7:
    "font-semibold xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[8px]",
  body8: "font-medium text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
