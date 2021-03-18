import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import classNames from "classnames";
import style from "./List.module.css";
import { deleteTodo as deleteOldTodo } from "../../../../redux/todosReducer/todosReducer";
import { checkTodo as itemCheckTodo } from "../../../../redux/todosReducer/todosReducer";
import { Draggable } from "react-beautiful-dnd";
// eslint-disable-next-line react/prop-types
function List({ todos, deleteTodo, checkTodo }) {
  const history = useHistory();
  const onItemClick = (todo) => () => {
    history.push(`/todoitem/${todo.id}`, todo.title);
  };
  const onItemCheck = (id) => (e) => {
    const checked = e.target.checked;
    // eslint-disable-next-line no-unused-vars
    checkTodo(id, checked);
  };

  return (
    <diV>
      {/* eslint-disable-next-line react/prop-types */}
      {todos.map((todo, index) => (
        <Draggable key={todo.id} draggableId={todo.id} index={index}>
          {(provided, snapshot) => {
            return (
              // style={{
              //   background: snapshot.isDragging
              //     ? "blue"
              //     : "grey",
              //   padding: 14,
              //   margin: 5,
              //   minHeight: 50,
              //   color: "white",
              //   ...provided.draggableProps.style,
              // }}

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
                      deleteTodo(todo.id);
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
                        onChange={onItemCheck(todo.id)}
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
      todos: state.todos,
    }),
    {
      deleteTodo: deleteOldTodo,
      checkTodo: itemCheckTodo,
    }
  )
)(List);
