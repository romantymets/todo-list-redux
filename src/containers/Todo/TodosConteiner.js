import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
// import { addTodo as addTodoAction } from "../../redux/todosReducer/todosReducer";
import { changeTitle as changeNewTitle } from "../../redux/titleReduser/titleReducer";

// eslint-disable-next-line react/prop-types
function TodosContainer({ changeTitle, title }) {
  const oninputText = (e) => {
    const text = e.target.value;
    changeTitle((title = text));
  };

  return (
    <div className="container">
      <form className="container">
        <div className="form-group">
          <h2> Enter Todo </h2>
          <input
            type="text"
            className="form-control"
            placeholder="Enter text"
            required
            onChange={oninputText}
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
      <footer></footer>
    </div>
  );
}

export default compose(
  connect((state) => ({ title: state.title }), { changeTitle: changeNewTitle })
  // connect((state) => ({ todos: state.todos }), { addTodo: addTodoAction })
)(TodosContainer);
