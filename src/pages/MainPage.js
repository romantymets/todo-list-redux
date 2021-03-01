import React, { useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { addTodo as addTodoAction } from "../redux/todosReducer/todosReducer";

const MainPage = ({ todos, addTodo }) => {
  const todo = todos[0] || {};

  useEffect(() => {
    setTimeout(() => {
      addTodo({
        title: "hi",
      });
    }, 2000);
  }, []);

  return (
    <div>
      <h2> Helo </h2>
      <p>{todo.title}</p>
    </div>
  );
};

export default compose(
  connect((state) => ({ todos: state.todos }), { addTodo: addTodoAction })
)(MainPage);
