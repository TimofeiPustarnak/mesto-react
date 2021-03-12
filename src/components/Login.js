import React from "react";
import * as auth from "../utils/auth.js";
import { Link, withRouter } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    auth.login(this.state.password, this.state.email).then((res) => {
      if (res) {
        this.setState(
          {
            message: "",
          },
          () => {
            localStorage.setItem("token", res.token);
            this.props.onLogin();
            this.props.history.push("/");
          }
        );
      } else {
        this.setState({
          message: "Что-то пошло не так!",
        });
      }
    });
  }
  render() {
    return (
      <>
        <form className="form" noValidate onSubmit={this.handleSubmit}>
          <h1 className="form__title">Вход</h1>
          <input
            className="form__input"
            type="email"
            placeholder="Email"
            name="email"
            onChange={this.handleChange}
          ></input>
          <input
            className="form__input"
            type="password"
            placeholder="Пароль"
            name="password"
            onChange={this.handleChange}
          ></input>
          <button className="form__button" type="submit">
            Войти
          </button>
        </form>
      </>
    );
  }
}
export default withRouter(Login);
