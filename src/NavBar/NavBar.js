import React from "react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaAngular } from "react-icons/fa";
import { FcTodoList } from "react-icons/fc";
import { RiMastodonLine } from "react-icons/ri";
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
    <div className="container">
      <nav className="navbar navbar-expand-md" ref={wrapperRef}>
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
          <span className="navbar-toggler-icon"> </span>
        </button>
        <div
          className={`collapse navbar-collapse ${showBar ? "show" : null}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ml-auto">
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
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
