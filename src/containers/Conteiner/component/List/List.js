import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Draggable } from "react-beautiful-dnd";
import { deleteTodo as deleteOldTodo } from "../../../../redux/ListItemsReducer/ListItemReducer";
import { checkTodo as itemCheckTodo } from "../../../../redux/ListItemsReducer/ListItemReducer";
import classNames from "classnames";
import style from "./List.module.css";

// eslint-disable-next-line react/prop-types
function List({ itemId, listItems, deleteTodo, checkTodo }) {
  const cardItem = listItems[itemId] || {};
  const todos = cardItem.todos || [];
  const history = useHistory();
  const onItemClick = (todo) => () => {
    history.push(`/todoitem/${todo.id}`, todo);
  };
  const onItemCheck = (todoId, itemId) => (e) => {
    const completed = e.target.checked;
    // eslint-disable-next-line no-unused-vars
    checkTodo(todoId, itemId, completed);
  };

  return (
    <diV>
      {/* eslint-disable-next-line react/prop-types */}
      {todos.map((todo, index) => (
        <Draggable key={todo.id} draggableId={todo.id} index={index}>
          {(provided, snapshot) => {
            return (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                className={classNames("card", style.listItem)}
                key={todo.id}
              >
                <div className={classNames("card-header", style.header)}>
                  {index + 1} Card
                  <span
                    className={classNames(style.button)}
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteTodo(todo.id, itemId);
                    }}
                  >
                    {" "}
                    X{" "}
                  </span>
                </div>
                <div className="card-body">
                  <div
                    className={classNames(
                      "card-title",
                      style.titleBody,
                      `${todo.completed ? style.doneTodo : null}`
                    )}
                  >
                    <div className={style.titleText}>
                      <input
                        type="checkbox"
                        checked={todo.completed}
                        className={style.checkboxContainer}
                        onChange={onItemCheck(todo.id, itemId)}
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      />
                      <span onClick={onItemClick(todo)} className="h6">
                        {" "}
                        {todo.title}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          }}
        </Draggable>
      ))}
    </diV>
  );
}

export default compose(
  connect(
    (state) => ({
      listItems: state.listItems,
    }),
    {
      deleteTodo: deleteOldTodo,
      checkTodo: itemCheckTodo,
    }
  )
)(List);
