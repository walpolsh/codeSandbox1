import React, { useState } from "react";
import ReactDOM from "react-dom";

function App() {
  const [name, setName] = useState("Paul");

  return (
    <div>
      <p>You clicked {name} times</p>
      <button
        onClick={() => (name === "Paul" ? setName("Henry") : setName("Paul"))}
      >
        Click me
      </button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
