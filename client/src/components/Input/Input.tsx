import "./Input.css"

type InputType = {
  label: string;
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
};

export default function Input({ label, value, placeholder, onChange }: InputType) {
  return (
    <div className="input">
    <label>
      {label}
      <input
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
    </div>
  );
}
