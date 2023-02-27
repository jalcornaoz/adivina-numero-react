export default function MostrarMensaje({ number, secretNumber }) {
  if (number === secretNumber) {
    return <p className="message">¡Has acertado!</p>;
  } else if (number > secretNumber) {
    return <p className="message">Numero secreto menor.</p>;
  } else if (number < secretNumber) {
    return <p className="message">Numero secreto mayor.</p>;
  }
  return <p className="message">Adivina el número...</p>;
}
