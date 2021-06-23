import { useState, useEffect } from "react";
const Counter = () => {
  let [count, setCount] = useState(0);

  const add = () => setCount(count + 1);
  const minus = () => setCount(count - 1);
  useEffect(() => {
    document.title = `clicked: ${count}`;
  }, [count]);

  return (
    <>
      <button onClick={add}>+</button>
      <label>{count}</label>
      <button onClick={minus}>-</button>
      <br />
      <hr />
    </>
  );
};
export default Counter;
