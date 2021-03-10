import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import classNames from "classnames";
import style from "./TodoCompletedForm.module.css";
import ListCompleted from "./List/ListCompleted";

// eslint-disable-next-line react/prop-types
function TodoCompletedForm({ todos }) {
  // eslint-disable-next-line react/prop-types
  return (
    <div className={classNames("container", style.todoContainer)}>
      <form className="container">
        <div className="form-group">
          <h3> Done </h3>
          <ListCompleted />
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
