import React from "react";
import FormContainer from "../../containers/TodoInprocesForm/FormConteiner";
import TodoCompletedForm from "../../containers/TodoCompledForm/TodoCompletedForm";
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
