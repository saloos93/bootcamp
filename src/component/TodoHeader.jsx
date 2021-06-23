import React from "react";
import { useState } from "react";

export default function TodoHeader(props) {
  let { insertToList } = props;
  let [text, setText] = useState("");

  const changeTextOfInput = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <input value={text} onChange={changeTextOfInput}></input>
      <button onClick={() => insertToList(text)}>Add</button>
    </>
  );
}
