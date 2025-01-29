import React from "react";
import { Link } from "react-router-dom";
import "./Style.css";

const NavBar = () => {
  return (
    <div className="container">
      <nav className="navbar-expand-lg navbar-light bg-light">
        <div id="navbarToggler">
          <ul>
            <li className="nav-item">
              <Link className="link" to="/">
                Bill Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="link" to="/add">
                Add a Bill
              </Link>
            </li>
            <li className="nav-item">
              <Link className="link" to="/chart">
                Billing Cycle
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
