import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
// import {useHistory} from "react-router-dom";
import classNames from "classnames";
import style from "./List.module.css";

// eslint-disable-next-line react/prop-types
function List({ todos }) {
  // const history = useHistory();

  // const onItemClick = (todo) => () => {
  //   history.push(`/todoitem${todo._id}`);
  // };

  return (
    <ul className="list-group list-group-flush">
      {/* eslint-disable-next-line react/prop-types */}
      {todos.map((todo, index) => (
        <li
          className="list-group-item"
          key={todo._id}
          // onClick={onItemClick(todo)}
        >
          <div className="container">
            <div
              className={classNames(
                "row",
                `${todo.completed ? style.doneTodo : null}`
              )}
            >
              <div className="col-1">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  // onChange={onItemCheck(todo._id)}
                />
              </div>
              <div className="col-1"> {index + 1}</div>
              <div className="col-9"> {todo.title}</div>
              <div className="col-1">
                <button
                  className="btn-danger"
                  // onClick={() => {
                  //   deleteTodo(todo._id);
                  // }}
                >
                  {" "}
                  X
                </button>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default compose(
  connect((state) => ({
    todos: state.todos,
  }))
)(List);
