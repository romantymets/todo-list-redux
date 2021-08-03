import React from "react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaAngular } from "react-icons/fa";
import { FcTodoList } from "react-icons/fc";
import { RiMastodonLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css";

function NavBar() {
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

  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-md " ref={wrapperRef}>
        <Link to="/todo-list-redux" className="navbar-brand">
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
              <Link to="/todo-list-redux/todoitem/:id" className="nav-link">
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
              <Link to="/todo-list-redux/about" className="nav-link">
                {" "}
                <span className="image">
                  <FaAngular />{" "}
                </span>{" "}
                <span className="textColor"> About</span>
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/todo-list-redux/" className="nav-link">
                {" "}
                <span className="image">
                  <FaHome />{" "}
                </span>{" "}
                <span className="textColor"> Home</span>{" "}
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/todo-list-redux/signup" className="nav-link">
                <span className="textColor"> sign up</span>{" "}
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/todo-list-redux/signin" className="nav-link">
                <span className="textColor"> Sign in</span>{" "}
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">
                <span className="textColor"> Log Out</span>{" "}
                <span className="sr-only">(current)</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
