import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [setIsHover] = useState(false);
  return (
    <div className="navbar">
      <div className="wrapper">
        <nav>
          <div className="logo">
            <Link className="logo-text" to="/">MultivanVag</Link>
          </div>
          <ul className={isOpen ? "active" : ""}>
            <li>
              <NavLink classNameActive="active" to="/" onClick={() => {
                  setIsOpen(false);
                  setIsHover(false);
                }}>Главная</NavLink>
            </li>
            <li>
              <NavLink classNameActive="active" to="/history" onClick={() => {
                  setIsOpen(false);
                  setIsHover(false);
                }}>История</NavLink>
            </li>
            <li>
              <NavLink classNameActive="active" to="/about" onClick={() => {
                  setIsOpen(false);
                  setIsHover(false);
                }}>О нас</NavLink>
            </li>
          </ul>

          <div className={isOpen ? "hamburger-lines active" : "hamburger-lines"} onClick={() => setIsOpen(!isOpen)}>
            <span className="line_ line1"></span>
            <span className="line_ line2"></span>
            <span className="line_ line3"></span>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
