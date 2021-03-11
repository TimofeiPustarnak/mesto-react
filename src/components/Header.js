import React from "react";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <img src={logo} className="header__image" alt="лого место" />
        <Link className="header__link" to={`${this.props.linkPath}`}>
          {this.props.linkText}
        </Link>
      </header>
    );
  }
}
export default Header;
