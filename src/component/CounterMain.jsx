import { useState, useReducer } from "react";

let initialState = { count: 0 };
let reducer = (state, action) => {
  switch (action.type) {
    case "inc":
      return { count: state.count + 1 };

    case "dec":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export default function CounterMain() {
  // let [count, setCount] = useState(0);

  // const inc = () => setCount(count + 1);
  // const dec = () => setCount(count - 1);
  //-----------------------------------
  let [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <button onClick={() => dispatch({ type: "inc" })}>+</button>
      <label>{state.count}</label>
      <button onClick={() => dispatch({ type: "dec" })}>-</button>
    </>
  );
}
