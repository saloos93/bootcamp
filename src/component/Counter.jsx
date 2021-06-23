import { useState, useEffect } from "react";

const useChangeDocumentTitle = (_count) => {
  useEffect(() => {
    document.title = `clicked: ${_count}`;
  }, [_count]);
};

const Counter = () => {
  let [count, setCount] = useState(0);

  const add = () => setCount(count + 1);
  const minus = () => setCount(count - 1);
  useChangeDocumentTitle(count);
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
