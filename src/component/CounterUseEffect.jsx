import react, { useState, useEffect } from "react";

export default function CounterUseEffect() {
  const [count, setCount] = useState(0);

  //Mount & UnMount
  useEffect(() => {
    console.log("Component is Mount");
    return () => {
      console.log("Component is UnMount");
    };
  }, []);
  //UpDate
  useEffect(() => {
    console.log("Component is Update");
  });

  /////////////////////////

  const increament = () => setCount(count + 1);

  return (
    <div>
      {count}
      <button onClick={increament}>+</button>
      <hr size="2" width="90%" color="red" />
    </div>
  );
}
