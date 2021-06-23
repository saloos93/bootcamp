import TodoHeader from "./TodoHeader";
import TodoBody from "./TodoBody";
import React, { useState } from "react";

export default function Todo() {
  let [todoList, setTodoList] = useState([
    { value: "cook nimroo", status: "true" },
    { value: "wash clothes", status: "false" },
  ]);
  const handleInsertToList = (text) => {
    let todo = { value: text, status: false };
    setTodoList([...todoList, todo]);
  };

  return (
    <>
      <TodoHeader insertToList={(text) => handleInsertToList(text)} />
      <TodoBody todoList={todoList} />
    </>
  );
}
