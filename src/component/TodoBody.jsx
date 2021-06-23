import React from "react";

export default function TodoBody(props) {
  let { todoList } = props;
  return (
    <h1>
      <ul>
        {todoList.map((todoItem) => {
          return (
            <li key={Math.random()}>
              <input type="checkbox" checked={todoItem.status} />
              {todoItem.value}
            </li>
          );
        })}
      </ul>
    </h1>
  );
}
