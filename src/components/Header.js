import React from "react";
import logo from "../images/logo.svg";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <img src={logo} className="header__image" alt="лого место" />
      </header>
    );
  }
}
export default Header;
