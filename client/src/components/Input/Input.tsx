import "./Input.css"

type InputType = {
  label: string;
  value: string;
  onChange: (value: string) => void;
};

export default function Input({ label, value, onChange }: InputType) {
  return (
    <div className="input">
    <label>
      {label}
      <input value={value} onChange={(e) => onChange(e.target.value)} />
    </label>
    </div>
  );
}
