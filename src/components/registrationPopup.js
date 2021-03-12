import React from "react";
import success from "../images/Union.svg";
import fail from "../images/Union(1).svg";
import cross from "../images/Vector(1).svg";

class RegistrationPopup extends React.Component {
  render() {
    return (
      <>
        <div className={`popup ${this.props.isOpen ? "popup_opened" : ""}`}>
          <div className="popup__container">
            <button
              className="popup__close-button"
              type="button"
              onClick={this.props.onClose}
            >
              <img src={cross} alt="закрыть" className="popup__close-image" />
            </button>
            <img
              src={this.props.success ? success : fail}
              className="popup__union"
            />
            <p className="popup__message">
              {this.props.success
                ? "Вы успешно зарегистрировались!"
                : "Что-то пошло не так! Попробуйте ещё раз."}
            </p>
          </div>
        </div>
      </>
    );
  }
}
export default RegistrationPopup;
