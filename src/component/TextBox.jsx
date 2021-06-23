import { useState } from "react";

export default function TextBox() {
  const [number, setNumber] = useState(0);
  return (
    <div>
      number:{number % 2 == 0 ? "Even" : "Odd"}
      <input type="number" onChange={(e) => setNumber(e.target.value)}></input>
    </div>
  );
}
