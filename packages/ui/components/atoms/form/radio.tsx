import { forwardRef, InputHTMLAttributes } from "react";
import clsx from "clsx";

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  value?: string;
  checked?: boolean;
  label: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ id, value, checked, label, onChange, ...props }, ref) => {
    return (
      <div className="flex items-center">
        <input
          type="radio"
          id={id}
          ref={ref}
          value={value}
          checked={checked}
          className={clsx(
            "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          )}
          onChange={onChange}
          {...props}
        />
        <label
          htmlFor={id}
          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          {label}
        </label>
      </div>
    );
  }
);

export default Radio;
