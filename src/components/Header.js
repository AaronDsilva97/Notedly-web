import React from "react";
import logo from "../images/logo.svg";

const Header = () => {
  return (
    <div>
      <header>
        <img src={logo} alt="Notedly Logo" height="40" />
        <h1>Notedly</h1>
      </header>
    </div>
  );
};

export default Header;
