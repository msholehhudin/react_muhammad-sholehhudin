import { useState } from "react";
import "./style.css";
import Hamburger from "hamburger-react";

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
        <p className="text">HOME</p>
        <p className="text">ABOUT</p>
      </div>
      {/* <button
        className={`toggle-button ${isOpen ? "open" : ""}`}
        onClick={toggleHandler}
      >
        Toggle
      </button> */}
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
