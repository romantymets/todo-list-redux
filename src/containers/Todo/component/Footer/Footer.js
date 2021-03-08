import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";

// eslint-disable-next-line react/prop-types
function Footer({ todos }) {
  const countTodoChecked = () => {
    const newTodo = [...todos];
    const findCheckedTodo = newTodo.filter((todo) => todo.completed === true);
    return findCheckedTodo.length;
  };
  return (
    <footer>
      {/* eslint-disable-next-line react/prop-types */}
      <p> All todo : {todos.length}</p>
      <p> Checked todo: {countTodoChecked()}</p>
    </footer>
  );
}

export default compose(
  connect((state) => ({
    todos: state.todos,
  }))
)(Footer);
