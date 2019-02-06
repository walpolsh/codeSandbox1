import React, { useState, useEffect } from "react";

export default function App() {
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
