export interface OptionProps {
  value: string;
  label: string;
  disabled?: boolean;
}

const Option = ({ value, label, disabled = false }: OptionProps) => {
  return (
    <option value={value} disabled={disabled}>
      {label}
    </option>
  );
};

export default Option;
