import { useState, useRef, useEffect } from "react";
import "./App.css";
import MostrarMensaje from "./MostrarMensaje.js";

const randomNumber = () => Math.trunc(Math.random() * 20) + 1;

function App() {
  const [number, setNumber] = useState("");
  const [score, setScore] = useState(20);
  const [highscore, setHighscore] = useState(0);
  const [secretNumber, setSecretNumber] = useState(randomNumber());
  const inputRef = useRef(null); // se pasa el valor que tomamos de la caja de texto

  const handleCheck = () => {
    setNumber(Number(inputRef.current.value));
  };

  const compareNumber = () => {
    console.log(`El número secreto es ${secretNumber}`);
    console.log(`El número introducido es ${number}`);
    if (number === secretNumber) {
      // mensaje: has ganado -> HECHO
      // mostrar número secreto -> HECHO
      // cambiar el color de fondo (verde)
      // si 'score' mayor que 'highscore', actualizar el highscore
    } else if (score === 1) {
      setScore(score - 1);
      // mensaje: has perdido -> HECHO
      // cambiar el color de fondo (rojo)
    } else if (number === "") {
    } else {
      // mensaje: el número secreto es mayor o menor -> HECHO
      setScore(score - 1);
    }
  };

  useEffect(compareNumber, [number]); //se ejecuta 'compareNumber' cuando cambia el valor 'number'

  return (
    <div>
      {console.log("Renderizando App")}
      <header>
        <h1>Guess My Number!</h1>
        <p className="between">(Between 1 and 20)</p>
        <button className="btn again">Again!</button>
        <div className="number">{number === secretNumber ? number : "?"}</div>
      </header>
      <main>
        <section className="left">
          <input type="number" className="guess" ref={inputRef} />
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
