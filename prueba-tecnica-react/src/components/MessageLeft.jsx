export function MessageLeft({ sender, message }) {
  return (
    <>
      <h3>{sender}</h3>
      <p>{message}</p>
    </>
  );
}
