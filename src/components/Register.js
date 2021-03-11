import React from "react";

class Register extends React.Component {
  render() {
    return (
      <>
        <section className="form">
          <h1 className="form__title">Вход</h1>
          <input
            className="form__input"
            type="email"
            placeholder="Email"
          ></input>
          <input
            className="form__input"
            type="password"
            placeholder="Пароль"
          ></input>
          <button className="form__button" type="submit">
            Войти
          </button>
        </section>
      </>
    );
  }
}
export default Register;
