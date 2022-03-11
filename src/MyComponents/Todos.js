import React from "react";
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
  return (
    <div className="conatiner">
      <h3 className="text-center mt-3">Todo List</h3>
      {/* {console.log(props.todos)} */}
      <div className="container text-center">
        <table className="table">
          <thead>
            <tr>
              <th scope="col"> #</th>
              <th scope="col"> Title</th>
              <th scope="col"> Desc</th>
              <th scope="col"> Action</th>
            </tr>
          </thead>
          <tbody>
            {props.todos &&
              props.todos.length > 0 &&
              props.todos.map((single) => (
                <TodoItem
                  key={single.sno}
                  todo={single}
                  deleteTodo={props.deleteTodo}
                  // onChange={(e) => setTitle(e.target.value)}
                  // value={title}
                />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
