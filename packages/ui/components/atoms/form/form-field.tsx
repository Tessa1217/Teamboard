import React from "react";
import clsx from "clsx";

interface FormFieldProps {
  label?: string;
  labelVisible?: boolean;
  children: React.ReactNode;
  helpText?: string;
  required?: boolean;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  labelVisible = false,
  children,
  helpText,
  required = false,
}) => {
  const id =
    children.props.id ||
    `form-field-${Math.random().toString(36).substring(2, 9)}`;

  return (
    <div className="mb-4">
      {label && (
        <label
          htmlFor={id}
          className={clsx(
            "block mb-1 font-medium text-gray-700",
            !labelVisible && "hidden"
          )}
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      {React.cloneElement(children, {
        id,
        "aria-describedby": helpText ? `${id}-desc` : undefined,
      })}
      {helpText && (
        <p className="text-sm text-gray-500 mt-1" id={`${id}-desc`}>
          {helpText}
        </p>
      )}
    </div>
  );
};

export default FormField;
