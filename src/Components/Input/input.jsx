import "./input.scss";

export default function Input({ label, placeholder, name, type = "text" }) {
  return (
    <>
      <input type={type} name={name} id={name} placeholder={placeholder} />
    </>
  );
}
