import React from "react";

export const TodoItem = (props) => {
  return (
    console.log(props.todo.title),
    (
      <>
        <div className="container text-center">
          <table className="table">
            <thead>
              <th scope="col"> #</th>
              <th scope="col"> Title</th>
              <th scope="col"> Desc</th>
              <th scope="col"> Action</th>
            </thead>
            <tbody>
              <tr>
                <th scope="row">{props.todo.sno}</th>
                <td>{props.todo.title}</td>
                <td>{props.todo.desc}</td>
                <td>
                  <button className="btn btn-sm btn-danger">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    )
  );
};
