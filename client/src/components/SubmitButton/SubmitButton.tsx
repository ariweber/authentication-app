import "./SubmitButton.css"

type SubmitButtonType = {
  text: string;
  disabled?: boolean;
};

export default function SubmitButton({ text, disabled }: SubmitButtonType) {
  return (
    <button className="submit-button" type="submit" disabled={disabled}>
      {text}
    </button>
  );
}
