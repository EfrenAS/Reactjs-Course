export default function SayHello({name, lastname, city}) {
  return (
    <>
      <h1 data-testid="test-title">Hello {name} {lastname}</h1>
      <p>You are from {city}</p>
    </>
  );
}
