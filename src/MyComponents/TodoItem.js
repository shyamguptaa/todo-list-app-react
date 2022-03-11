import React from "react";

export const TodoItem = (props) => {
  return (
    console.log(props.todo.title),
    (
      <>
        <div>
          <span>{props.todo.title}</span>
          <br />
          <span>{props.todo.desc}</span>
        </div>
      </>
    )
  );
};
