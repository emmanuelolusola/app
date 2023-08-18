import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/helium-hnt-logo.png";

import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="logo-section">
        <Link to="/">
          <img src={logo} alt="logo" className="logo-container" />
        </Link>
        <h1 className="dapp">DAPPCONNECT</h1>
      </div>
      <Link to="/select">
        <button>Connect Wallet</button>
      </Link>
    </div>
  );
};

export default Navbar;
