import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  const readNumber = () => {
    const n = parseFloat(input);
    return Number.isFinite(n) ? n : null;
  };

  const doOperation = (op) => {
    const n = readNumber();
    if (n === null) return;

    setResult((prev) => {
      switch (op) {
        case "add":
          return prev + n;
        case "subtract":
          return prev - n;
        case "multiply":
          return prev * n;
        case "divide":
          return n === 0 ? prev : prev / n; // 0-val osztás védelem
        default:
          return prev;
      }
    });
  };

  return (
    <div className="App">
      <h1>Simplest Working Calculator</h1>
      <p className="result">{result}</p>

      <input
        type="number"
        placeholder="Type a number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div className="buttons">
        <button onClick={() => doOperation("add")}>add</button>
        <button onClick={() => doOperation("subtract")}>subtract</button>
        <button onClick={() => doOperation("multiply")}>multiply</button>
        <button onClick={() => doOperation("divide")}>divide</button>

        <button className="reset" onClick={() => setInput("")}>
          reset input
        </button>
        <button className="reset" onClick={() => setResult(0)}>
          reset result
        </button>
      </div>
    </div>
  );
}
