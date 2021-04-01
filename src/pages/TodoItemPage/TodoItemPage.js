import React from "react";
import { useHistory, useLocation } from "react-router-dom";

function TodoItemPage() {
  const history = useHistory();
  const location = useLocation();
  const todo = location.state;
  const { title, id } = todo;
  console.log(id);
  const goBack = () => history.goBack();

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">TODO</div>
        <div className="card-body">
          <h5 className="card-title"> Change todo </h5>
          <div className="form-floating">
            <textarea className="form-control" placeholder="chose uor todo">
              {title}
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

export default TodoItemPage;
