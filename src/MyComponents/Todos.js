import React from "react";
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
  return (
    <div className="conatiner">
      <h3>Todo List</h3>
      {console.log(props.todos)}

      <TodoItem todo={props.todos[0]} />
    </div>
  );
};
