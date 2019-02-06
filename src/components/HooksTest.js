import React from "react";

const initialState = { people: ["Henry"] };

function reducer(state, action) {
  switch (action.type) {
    case "ADDPAUL":
      return { people: state.people.concat("Paul") };
    default:
      throw new Error();
  }
}

export default function HooksTest() {
  const [count, setCount] = React.useState(1);
  const [count2, setCount2] = React.useState(0);
  const [name, setName] = React.useState("Paul");
  const [state, dispatch] = React.useReducer(reducer, initialState);

  function handleClick() {
    setCount2(c => c + 9999);
  }

  return (
    <>
      <div>
        Hooks! {name} {count} {state.people}
      </div>
      <button onClick={handleClick}>{count2}</button>
      <button onClick={() => setCount(count * 2)}>Double Count!</button>
      <button onClick={() => setCount(1)}>Reset Count!</button>
      <button
        onClick={() =>
          name === "Paul" ? setName("Paul Walsh") : setName("Paul")
        }
      >
        Change Name
      </button>
      <button onClick={() => dispatch({ type: "ADDPAUL" })}>Add Paul</button>
    </>
  );
}
