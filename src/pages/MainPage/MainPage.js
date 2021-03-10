import React from "react";
import FormContainer from "../../containers/Todo/FormConteiner";
import TodoCompletedForm from "../../containers/TodoCompled/TodoCompletedForm";
import "./MainPage.css";

const MainPage = () => {
  return (
    <div className="mycontainer">
      <FormContainer />
      <TodoCompletedForm />
    </div>
  );
};

export default MainPage;
