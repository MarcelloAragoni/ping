import "./button.scss";

export default function Button({ text, type, onClick }) {
  return (
    <button onClick={onClick} className={`button button--${type}`}>
      {text}
    </button>
  );
}
