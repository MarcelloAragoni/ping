import "./input.scss";

export default function Input({
  placeholder,
  name,
  type = "text",
  value,
  setInputState,
}) {
  function handleChange(event) {
    setInputState(event.target.value);
  }
  
  return (
    <input
      onChange={handleChange}
      name={name}
      id={name}
      type={type}
      placeholder={placeholder}
      value={value}
    />
  );
}
