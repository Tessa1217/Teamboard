import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ value, defaultValue, onChange, ...props }, ref) => {
    return (
      <input
        ref={ref}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        className="border border-gray-400 px-3 py-2 rounded"
        {...props}
      />
    );
  }
);

export default Input;
