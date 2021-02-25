import React from "react";
import cross from "../images/Vector(1).svg";

class ImagePopup extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        className={`popup ${
          this.props.data.isOpen ? "popup_opened" : ""
        } popupImage`}
        id="popup-image"
      >
        <div className="popup__case">
          <img
            className="popup__image"
            src={this.props.data.link}
            alt={this.props.data.name}
          />
          <button className="popup__close-button" type="button">
            <img
              src={cross}
              alt="закрыть"
              className="popup__close-image"
              onClick={this.props.onClose}
            />
          </button>
          <h3 className="popup__image-title">{this.props.data.name}</h3>
        </div>
      </div>
    );
  }
}
export default ImagePopup;
