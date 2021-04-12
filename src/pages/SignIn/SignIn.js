import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import Api from "../../api/Api";
import {
  setToken as setTokenAction,
  setUser as setUserAction,
} from "../../redux/registrationReduser/RegistrationReducer";
import "./SignIn.css";

const SignIn = ({ setToken, setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [disableButton, setDisableButton] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const history = useHistory();
  const PaswordChange = (e) => {
    const data = e.target.value;
    setpassword(data);
  };
  const EmailChange = (e) => {
    const data = e.target.value;
    setEmail(data);
  };
  const onSubmitFormSignIn = (e) => {
    e.preventDefault();
    setDisableButton(true);
    Api.post("/auth/signin", {
      email,
      password,
    })
      .then((response) => {
        const { data } = response;
        const { user, token } = data;
        setDisableButton(false);
        setShowMessage(true);
        setToken(token);
        setUser(user);
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
      })
      .catch((error) => {
        alert(error.message);
        setDisableButton(false);
      });
  };
  const goHome = () => {
    setShowMessage(false);
    history.push("/");
  };

  return (
    <div>
      {showMessage ? (
        <div>
          <h5> registration successful </h5>
          <button className="btn btn-primary" onClick={() => goHome}>
            log in
          </button>
        </div>
      ) : (
        <div>
          <h5 className="register">Registration</h5>
          <div className="LogInContainer">
            <form className="FormContainer" onSubmit={onSubmitFormSignIn}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder=" enter your email"
                  value={email}
                  onChange={EmailChange}
                  required
                  autoComplete="on"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder=" enter your password"
                  value={password}
                  onChange={PaswordChange}
                  required
                  autoComplete="on"
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={disableButton}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default compose(
  connect(null, {
    setToken: setTokenAction,
    setUser: setUserAction,
  })
)(SignIn);
