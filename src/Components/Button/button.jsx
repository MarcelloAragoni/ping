export default function Button({ text, type }) {
  return <button className={`button button--${type}`}>{text}</button>;
}
