import React from "react";
import { Link, withRouter } from "react-router-dom";
import * as auth from "../utils/auth.js";
class Register extends React.Component {
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
    auth.register(this.state.password, this.state.email).then((res) => {
      if (res) {
        this.setState(
          {
            message: "",
          },
          () => {
            this.props.history.push("/log-in");
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
          <h1 className="form__title">Регистрация</h1>
          <input
            className="form__input"
            type="email"
            placeholder="Email"
            name="email"
            onChange={this.handleChange}
          ></input>
          <input
            name="password"
            className="form__input"
            type="password"
            placeholder="Пароль"
            onChange={this.handleChange}
          ></input>
          <button className="form__button" type="submit">
            Зарегистрироваться
          </button>
          <Link className="form__redirection" to="/sign-in">
            Уже зарегистрированы? Войти
          </Link>
        </form>
      </>
    );
  }
}
export default withRouter(Register);
