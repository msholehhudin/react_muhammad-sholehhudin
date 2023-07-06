import { useState } from "react";
import "./style.css";
import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";
import { AppAbout, AuthorAbout, Home } from "../../../../Constant";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div
        className={`sidebar ${
          isOpen ? "open" : ""
        } d-flex flex-column align-items-center py-5`}
      >
        <div className="d-flex flex-column gap-3 py-5 text-nav">
          <p className="m-0">
            <Link className="text" to={Home}>
              Home
            </Link>
          </p>
          <p className="m-0">
            <Link className="text" to={AppAbout}>
              About App
            </Link>
          </p>
          <p className="m-0">
            <Link className="text" to={AuthorAbout}>
              About Author
            </Link>
          </p>
        </div>
      </div>

      <div className="toggle-button-container">
        <Hamburger
          className={`toggle-button ${isOpen ? "open" : ""}`}
          toggled={isOpen}
          toggle={toggleHandler}
        />
      </div>
    </nav>
  );
}
