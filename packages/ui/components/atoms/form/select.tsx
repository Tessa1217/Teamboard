import { forwardRef, SelectHTMLAttributes } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ value, defaultValue, onChange, children, ...props }, ref) => {
    return (
      <select
        ref={ref}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        {...props}
        className="border border-gray-400 px-3 py-2 rounded w-full"
      >
        {children}
      </select>
    );
  }
);

export default Select;
