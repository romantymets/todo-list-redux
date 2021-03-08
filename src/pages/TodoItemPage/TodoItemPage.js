import React from "react";
import { useHistory, useLocation } from "react-router-dom";

function TodoItemPage() {
  const history = useHistory();
  const location = useLocation();
  const title = location.state;

  const goBack = () => history.goBack();

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">TODO</div>
        <div className="card-body">
          <h5 className="card-title">{title ? title : "choose your todo"} </h5>
          <button type="submit" className="btn btn-primary" onClick={goBack}>
            Go back
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItemPage;
