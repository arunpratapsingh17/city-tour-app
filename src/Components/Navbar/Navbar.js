import React from "react";
import logo from "../../logo.svg";
import "./Navbar.scss";
export default function Navbar() {
  return (
    <nav className="Navbar">
      <img src={logo} />
      <ul className="nav-links">
        <li>
          <a href="/" className="nav-Link">
            Home
          </a>
        </li>
        <li>
          <a href="/" className="nav-Link active">
            About
          </a>
        </li>
        <li>
          <a href="/" className="nav-Link">
            Tours
          </a>
        </li>
      </ul>
    </nav>
  );
}
