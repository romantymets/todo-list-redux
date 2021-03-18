import React from "react";
import { v4 as uuidv4 } from "uuid";
import { compose } from "redux";
import { connect } from "react-redux";
// import { addTodo as addTodoAction } from "../../../../redux/todosReducer/todosReducer";
import { changeTitle as changeNewTitle } from "../../../../../redux/titleReduser/titleReducer";
import { addNewList as addNewListAction } from "../../../../../redux/ListItemsReducer/ListItemReducer";
import classNames from "classnames";
import style from "./FormList.module.css";

// eslint-disable-next-line react/prop-types
function FormList({ changeTitle, title, todos, addNewList }) {
  const oninputText = (e) => {
    const text = e.target.value;
    changeTitle(text);
  };
  const createList = (e) => {
    e.preventDefault();
    addNewList({
      [uuidv4()]: {
        name: title,
        items: [],
      },
    });
    changeTitle("");
  };
  return (
    <div className={classNames("container", style.todoContainer)}>
      <form className="container" onSubmit={createList}>
        <div className="form-group">
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
            {"+"} Add new card
          </button>
        </div>
      </form>
    </div>
  );
}

export default compose(
  connect(
    (state) => ({
      title: state.title,
      todos: state.todos,
      listItems: state.listItems,
    }),
    {
      changeTitle: changeNewTitle,
      addNewList: addNewListAction,
    }
  )
)(FormList);
