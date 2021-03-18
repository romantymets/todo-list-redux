import React from "react";
import FormAddTodo from "../../containers/Conteiner/component/AllForm/FormList/FormList";
import { compose } from "redux";
import { connect } from "react-redux";
// import { addTodo as addTodoAction } from "../../../../redux/todosReducer/todosReducer";
import "./MainPage.css";
import TodoListContainer from "../../containers/Conteiner/TodoListContiner/TodoListContainer";

const MainPage = () => {
  return (
    <div className="mycontainer">
      <FormAddTodo />
      <TodoListContainer />
    </div>
  );
};

export default compose(
  connect((state) => ({
    todos: state.todos,
    listItems: state.listItems,
  }))
)(MainPage);
