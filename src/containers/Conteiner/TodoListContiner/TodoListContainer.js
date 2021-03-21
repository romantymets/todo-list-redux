import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import FormTodoCard from "../component/AllForm/FormTodoCard/FormTodoCard";
import classNames from "classnames";
import style from "./TodoListConteiner.module.css";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { deleteList as deleteListAction } from "../../../redux/ListItemsReducer/ListItemReducer";
import List from "../component/List/List";

// eslint-disable-next-line react/prop-types
const TodoListContainer = ({ listItems = {}, deleteList }) => {
  const colums = listItems;
  if (colums === {}) {
    return <div />;
  } else {
    return (
      <div className={style.list}>
        <DragDropContext onDragEnd={(result) => console.log(result)}>
          {Object.entries(colums).map(([id, column]) => {
            return (
              <div
                key={id}
                className={classNames("container", style.todoContainer)}
              >
                <h2>
                  {" "}
                  {column.name}{" "}
                  <span
                    onClick={() => {
                      deleteList(id);
                    }}
                  >
                    {" "}
                    X{" "}
                  </span>{" "}
                </h2>
                <div className="formTodo">
                  {" "}
                  <FormTodoCard itemId={id} />{" "}
                </div>
                <div>
                  <Droppable droppableId={id} key={id}>
                    {(provided, snapshot) => {
                      return (
                        <div
                          ref={provided.innerRef}
                          {...provided.droppableProps}
                          style={{
                            background: snapshot.isDraggingOver
                              ? "lightblue"
                              : "lightgrey",
                            padding: 4,
                            minHeight: 500,
                            width: 250,
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
    }
  )
)(TodoListContainer);
