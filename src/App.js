import React from "react";
import { Provider } from "react-redux";
import reduxStore from "./redux/store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import MainPage from "./pages/MainPage/MainPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import NavBar from "./NavBar/NavBar";
import TodoItemPage from "./pages/TodoItemPage/TodoItemPage";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Provider store={reduxStore}>
        <Router>
          <NavBar />
          <Switch>
            <Route path="/todo-list-redux/about">
              <AboutPage />
            </Route>
            <Route path="/todo-list-redux/signin">
              <SignIn />
            </Route>
            <Route path="/todo-list-redux/signup">
              <SignUp />
            </Route>
            <Route path="/todo-list-redux/todoitem/:id">
              <TodoItemPage />
            </Route>
            <Route exact path="/todo-list-redux">
              <MainPage />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
