import "./Field.css";

interface FieldProps {
  required?: boolean;
  label: string;
  type?: string;
  placeholder: string;
  value: string;
  onChanged: (value: string) => void;
}

const Field = ({
  required = false,
  label,
  type = "text",
  placeholder,
  value,
  onChanged,
}: FieldProps) => {
  const typing = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChanged(event.target.value);
  };

  return (
    <div className={`field field-${type}`}>
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={typing}
        required={required}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Field;
