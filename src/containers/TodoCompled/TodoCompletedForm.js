import React from "react";
// import { v4 as uuidv4 } from "uuid";
import { compose } from "redux";
import { connect } from "react-redux";
// import { addTodo as addTodoAction } from "../../redux/todosReducer/todosReducer";
// import { changeTitle as changeNewTitle } from "../../redux/titleReduser/titleReducer";
import classNames from "classnames";
import style from "./TodoCompletedForm.module.css";

// eslint-disable-next-line react/prop-types
function TodoCompletedForm() {
  return (
    <div className={classNames("container", style.todoContainer)}>
      <form className="container">
        <div className="form-group">
          <h3> Done </h3>
          <input
            type="text"
            className="form-control"
            placeholder="Enter text"
            required
          />
          <br />
          <button type="submit" className="btn btn-primary">
            {"+"} Add new card
          </button>
        </div>
      </form>
    </div>
  );
}

export default compose(
  connect((state) => ({
    title: state.title,
    todos: state.todos,
  }))
)(TodoCompletedForm);
