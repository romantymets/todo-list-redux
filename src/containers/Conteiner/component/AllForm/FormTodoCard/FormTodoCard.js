import React from "react";
import { v4 as uuidv4 } from "uuid";
import { compose } from "redux";
import { connect } from "react-redux";
import { addTodo as addTodoAction } from "../../../../../redux/ListItemsReducer/ListItemReducer";
import { changeTodoTitle as changeNewTitle } from "../../../../../redux/titleReduser/titleTodoReducer";
import classNames from "classnames";
import style from "./FormCard.module.css";

// eslint-disable-next-line react/prop-types
function FormTodoCard({
  // eslint-disable-next-line react/prop-types
  changeTodoTitle,
  // eslint-disable-next-line react/prop-types
  titleTodo,
  // // eslint-disable-next-line react/prop-types
  // todos,
  // eslint-disable-next-line react/prop-types
  addTodo,
  // eslint-disable-next-line react/prop-types
  listItems,
  // eslint-disable-next-line react/prop-types
  itemId,
}) {
  const oninputText = (e) => {
    const text = e.target.value;
    // eslint-disable-next-line no-debugger
    changeTodoTitle(text, itemId);
  };
  const createList = (e) => {
    e.preventDefault();
    // eslint-disable-next-line react/prop-types
    addTodo(
      {
        title: titleTodo[itemId] || "",
        id: uuidv4(),
        completed: false,
      },
      itemId
    );
    changeTodoTitle("", itemId);
  };
  const todoTitle = titleTodo[itemId] || "";
  return (
    <form className="container" onSubmit={createList}>
      <div className={classNames("form-group", style.formContainer)}>
        <input
          type="text"
          className="form-control"
          placeholder="Enter text"
          required
          onChange={oninputText}
          /* eslint-disable-next-line react/prop-types */
          value={todoTitle || ""}
        />
        <button type="submit" className="btn btn-primary">
          {"+"}
        </button>
      </div>
    </form>
  );
}

export default compose(
  connect(
    (state) => ({
      titleTodo: state.titleTodo,
      listItems: state.listItems,
    }),
    {
      changeTodoTitle: changeNewTitle,
      addTodo: addTodoAction,
    }
  )
)(FormTodoCard);
