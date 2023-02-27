import { useState, useRef } from "react";
import "./App.css";
import MostrarMensaje from "./MostrarMensaje.js";

function App() {
  const randomNumber = () => Math.trunc(Math.random() * 20) + 1;
  const [number, setNumber] = useState("");
  const [score, setScore] = useState(20);
  const [highscore, setHighscore] = useState(0);
  const [secretNumber, setSecretNumber] = useState(randomNumber());

  const handleCheck = () => {
    if (number === secretNumber) {
      // mensaje: has ganado
      // mostrar número secreto -> HECHO
      // si 'score' mayor que 'highscore', actualizar el nombre
    } else if (number > secretNumber) {
      // mensaje: el número secreto es menor
      // disminuir score
    } else if (number < secretNumber) {
      // mensaje: el número secreto es mayor
      // disminuir score
    }
    setScore(score - 1);
    setHighscore(highscore + 1);
  };

  return (
    <div>
      <header>
        <h1>Guess My Number!</h1>
        <p className="between">(Between 1 and 20)</p>
        <button className="btn again">Again!</button>
        <div className="number">{number === secretNumber ? number : "?"}</div>
      </header>
      <main>
        <section className="left">
          <input type="number" className="guess" />
          <button className="btn check" onClick={handleCheck}>
            Check!
          </button>
        </section>
        <section className="right">
          <MostrarMensaje number={number} secretNumber={secretNumber} />
          <p className="label-score">
            💯 Score: <span className="score">{score}</span>
          </p>
          <p className="label-highscore">
            🥇 Highscore: <span className="highscore">{highscore}</span>
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
