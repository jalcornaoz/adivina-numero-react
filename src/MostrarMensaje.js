import "./MostrarMensaje.css";

export default function MostrarMensaje({ number, secretNumber }) {
  console.log(number, typeof number, secretNumber, typeof secretNumber);
  if (number === secretNumber) {
    return <p className="message">¡Has acertado!</p>;
  } else if (number === "") {
    return <p className="message">Empezamos a jugar...</p>;
  } else if (number > secretNumber) {
    return <p className="message">Numero secreto menor.</p>;
  } else if (number < secretNumber) {
    return <p className="message">Numero secreto mayor.</p>;
  }
}
