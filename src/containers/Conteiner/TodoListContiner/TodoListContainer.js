import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import {
  deleteList as deleteListAction,
  dragEnd as dragEndAction,
} from "../../../redux/ListItemsReducer/ListItemReducer";
import List from "../component/List/List";
import FormTodoCard from "../component/AllForm/FormTodoCard/FormTodoCard";
import classNames from "classnames";
import style from "./TodoListConteiner.module.css";

// eslint-disable-next-line react/prop-types
const TodoListContainer = ({ listItems = {}, deleteList, dragEnd }) => {
  const onDragEnd = (result, colums) => {
    if (!result.destination) return;
    dragEnd(result, colums);
  };

  const colums = listItems;
  if (colums === {}) {
    return <div />;
  } else {
    return (
      <div className={style.list}>
        <DragDropContext
          onDragEnd={(result) => {
            onDragEnd(result, colums);
          }}
        >
          {Object.entries(colums).map(([id, column]) => {
            return (
              <div
                key={id}
                className={classNames("container", style.todoContainer)}
              >
                <h4>
                  {" "}
                  {column.name}{" "}
                  <span
                    className={classNames(style.button)}
                    onClick={() => {
                      deleteList(id);
                    }}
                  >
                    {" "}
                    x{" "}
                  </span>{" "}
                </h4>
                <div className="formTodo">
                  {" "}
                  <FormTodoCard itemId={id} />{" "}
                </div>
                <div className={style.dropContainer}>
                  <Droppable droppableId={id} key={id}>
                    {(provided, snapshot) => {
                      return (
                        <div
                          className={style.droppableContainer}
                          ref={provided.innerRef}
                          {...provided.droppableProps}
                          style={{
                            background: snapshot.isDraggingOver
                              ? "lightblue"
                              : "#ebecf0",
                          }}
                        >
                          <List itemId={id} />
                          {provided.placeholder}
                        </div>
                      );
                    }}
                  </Droppable>
                </div>
              </div>
            );
          })}
        </DragDropContext>
      </div>
    );
  }
};

export default compose(
  connect(
    (state) => ({
      listItems: state.listItems,
    }),
    {
      deleteList: deleteListAction,
      dragEnd: dragEndAction,
    }
  )
)(TodoListContainer);
