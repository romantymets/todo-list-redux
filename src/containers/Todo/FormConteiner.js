import React from "react";
import { v4 as uuidv4 } from "uuid";
import { compose } from "redux";
import { connect } from "react-redux";
import { addTodo as addTodoAction } from "../../redux/todosReducer/todosReducer";
import { changeTitle as changeNewTitle } from "../../redux/titleReduser/titleReducer";
import List from "./component/List/List";
import Footer from "./component/Footer/Footer";

// eslint-disable-next-line react/prop-types
function TodosContainer({ changeTitle, title, todos, addTodo }) {
  const oninputText = (e) => {
    const text = e.target.value;
    changeTitle(text);
  };
  const addNewTodo = (e) => {
    e.preventDefault();
    addTodo({
      title: title,
      id: uuidv4(),
      completed: false,
    });
    changeTitle("");
  };
  return (
    <div className="container">
      <form className="container" onSubmit={addNewTodo}>
        <div className="form-group">
          <h2> Enter Todo </h2>
          <input
            type="text"
            className="form-control"
            placeholder="Enter text"
            required
            onChange={oninputText}
            value={title}
          />
          <br />
          <button type="submit" className="btn btn-primary">
            Add todo
          </button>
        </div>
      </form>
      <button type="submit" className="btn btn-primary">
        Load more
      </button>
      <List />
      <Footer />
    </div>
  );
}

export default compose(
  connect(
    (state) => ({
      title: state.title,
      todos: state.todos,
    }),
    {
      changeTitle: changeNewTitle,
      addTodo: addTodoAction,
    }
  )
)(TodosContainer);
