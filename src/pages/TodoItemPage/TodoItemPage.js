import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { todoItemChange as todoItemChangeAction } from "../../redux/ListItemsReducer/ListItemReducer";

// eslint-disable-next-line react/prop-types
function TodoItemPage({ todoItemChange }) {
  const history = useHistory();
  const location = useLocation();
  const todos = location.state;
  const todoToEdit = todos || {
    title: "",
    id: "",
    itemId: "",
    index: "",
    listName: "",
  };
  const { title, id, itemId, index, listName } = todoToEdit;
  const [titleArea, chengetitleArea] = useState(title);
  const onChangeTextArea = (e) => {
    const text = e.target.value;
    chengetitleArea(text);
  };
  const goBack = () => {
    todoItemChange(itemId, id, titleArea);
    history.goBack();
    chengetitleArea("");
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h5> List Name: {listName}</h5>
        </div>
        <div className="card-body">
          <h5 className="card-title"> Change todo: {index + 1} </h5>
          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="chose uor todo"
              onChange={onChangeTextArea}
            >
              {titleArea}
            </textarea>
          </div>
          <br />
          <button type="submit" className="btn btn-primary" onClick={goBack}>
            Go back
          </button>
        </div>
      </div>
    </div>
  );
}

export default compose(
  connect(
    (state) => ({
      listItems: state.listItems,
    }),
    {
      todoItemChange: todoItemChangeAction,
    }
  )
)(TodoItemPage);
