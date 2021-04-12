import React from "react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { FaHome, FaAngular } from "react-icons/fa";
import { FcTodoList } from "react-icons/fc";
import { RiMastodonLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import isEmpty from "lodash/isEmpty";
import "./Navbar.css";
import {
  setToken as setTokenAction,
  setUser as setUserAction,
} from "../redux/registrationReduser/RegistrationReducer";

function NavBar({ token, user, setToken, setUser }) {
  const { profile } = user || {};
  const { firstName, lastName } = profile || {};
  const wrapperRef = useRef(null);
  const [showBar, setShowBar] = useState(false);
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowBar(false);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  const onButtonClick = () => {
    setShowBar(!showBar);
  };
  useEffect(() => {
    const localStorageUser = localStorage.getItem("user");
    const localStorageToken = localStorage.getItem("token");
    setUser(JSON.parse(localStorageUser));
    setToken(localStorageToken);
  }, []);
  const clearTocken = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    setToken("");
  };
  return (
    <div className="container">
      <nav className="navbar navbar-expand-md " ref={wrapperRef}>
        <Link to="/" className="navbar-brand">
          {" "}
          MyTODO{" "}
          <span className="image">
            <FcTodoList />
          </span>{" "}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={onButtonClick}
        >
          <span className="image">
            {" "}
            <GiHamburgerMenu />
          </span>
        </button>
        <div
          className={`collapse navbar-collapse ${showBar ? "show" : null}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ml-auto my">
            <li className="nav-item active">
              <Link to="/todoitem/:id" className="nav-link">
                {" "}
                <span className="image">
                  {" "}
                  <RiMastodonLine />
                </span>
                <span className="textColor"> TodoItem</span>
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                {" "}
                <span className="image">
                  <FaAngular />{" "}
                </span>{" "}
                <span className="textColor"> About</span>
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                {" "}
                <span className="image">
                  <FaHome />{" "}
                </span>{" "}
                <span className="textColor"> Home</span>{" "}
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="nav-link">
                <span className="textColor"> sign up</span>{" "}
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signin" className="nav-link">
                <span className="textColor"> Sign in</span>{" "}
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <span className="textColor" onClick={clearTocken}>
                {" "}
                Log Out
              </span>{" "}
              <span className="sr-only">(current)</span>
            </li>
          </ul>
        </div>
        <div className="loginPerson">
          <h2> {profile ? `${firstName} ${lastName}` : ""}</h2>
        </div>
      </nav>
    </div>
  );
}

export default compose(
  connect(
    (state) => ({
      token: state.tokenState.token,
      user: state.tokenState.user,
    }),
    {
      setToken: setTokenAction,
      setUser: setUserAction,
    }
  )
)(NavBar);
