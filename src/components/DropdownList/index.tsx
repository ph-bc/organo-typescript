import "./DropdownList.css";

interface DropdownListProps {
  required: boolean;
  label: string;
  items: string[];
  value: string;
  onChanged: (value: string) => void;
}

const DropdownList = ({
  required,
  label,
  items,
  value,
  onChanged,
}: DropdownListProps) => {
  return (
    <div className="dropdown-list">
      <label>{label}</label>
      <select
        onChange={(event) => onChanged(event.target.value)}
        required={required}
        value={value}
      >
        <option value=""></option>
        {items.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default DropdownList;
