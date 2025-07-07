import React, { forwardRef } from "react";
import { getButtonClasses, BaseButtonProps } from "./button-styles";

interface CustomButtonProps {}

type ButtonProps = CustomButtonProps &
  BaseButtonProps &
  React.ComponentPropsWithRef<"button">;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      color = "blue",
      size = "md",
      variant = "solid",
      disabled = false,
      iconOnly = false,
      ...props
    },
    ref
  ) => {
    const buttonClass = getButtonClasses({
      color,
      size,
      variant,
      disabled,
      iconOnly,
    });

    return (
      <button className={buttonClass} {...props} ref={ref}>
        {children}
      </button>
    );
  }
);

export default Button;
