import { useState } from "react";

export default function TextBox() {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <input
        value={number}
        type="number"
        onChange={() => setNumber(number)}
      ></input>
    </div>
  );
}
