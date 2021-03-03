import React from "react";
import cross from "../images/Vector(1).svg";

class PopupWithForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div
          className={`popup ${this.props.isOpen ? "popup_opened" : ""} popup${
            this.props.class
          }`}
          id={this.props.id}
        >
          <form
            className={`popup__container ${
              this.props.smallForm ? "popup__container_small" : ""
            }`}
            method="get"
            name="card-link-&-title"
            noValidate
          >
            <button
              className="popup__close-button"
              type="button"
              onClick={this.props.onClose}
            >
              <img src={cross} alt="закрыть" className="popup__close-image" />
            </button>
            <h3 className={`popup__title ${this.props.additionalTitleClass}`}>
              {this.props.titleContent}
            </h3>
            {this.props.children}
            <input
              type="submit"
              className="popup__submit-button"
              name="submit-button"
              value={this.props.submitValue}
              id={this.props.submitId}
            />
          </form>
        </div>
      </>
    );
  }
}
export default PopupWithForm;
