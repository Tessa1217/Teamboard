import { forwardRef } from "react";
import { type BasicInputProps, getInputClasses } from "./input-styles";
interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    BasicInputProps {
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      value,
      defaultValue,
      onChange,
      inputWidth,
      inputSize,
      variant,
      disabled,
      ...props
    },
    ref
  ) => {
    const inputClass = getInputClasses({
      inputWidth,
      inputSize,
      variant,
      disabled,
    });
    return (
      <input
        ref={ref}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        className={inputClass}
        {...props}
      />
    );
  }
);

export default Input;
