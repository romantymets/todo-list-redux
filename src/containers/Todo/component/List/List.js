import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
// import {useHistory} from "react-router-dom";
import classNames from "classnames";
import style from "./List.module.css";
import { deleteTodo as deleteOldTodo } from "../../../../redux/todosReducer/todosReducer";

// eslint-disable-next-line react/prop-types
function List({ todos, deleteTodo }) {
  // const history = useHistory();
  // const onItemClick = (todo) => () => {
  //   history.push(`/todoitem${todo._id}`);
  // };
  // const onDeleteTodo = (id) => {
  //   deleteTodo(id);
  // };

  return (
    <ul className="list-group list-group-flush">
      {/* eslint-disable-next-line react/prop-types */}
      {todos.map((todo, index) => (
        <li
          className={classNames(
            style.listItem,
            `${todo.completed ? style.doneTodo : null}`
          )}
          key={todo.id}
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
                  className={style.checkboxContainer}
                  // onChange={onItemCheck(todo.id)}
                />
              </div>
              <div className="col-1"> {index + 1}</div>
              <div className="col-9"> {todo.title}</div>
              <div className="col-1">
                <button
                  className={classNames("btn-danger", style.button)}
                  onClick={() => {
                    // onDeleteTodo(todo.id);
                    deleteTodo(todo.id);
                  }}
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
  connect(
    (state) => ({
      todos: state.todos,
    }),
    {
      deleteTodo: deleteOldTodo,
    }
  )
)(List);
