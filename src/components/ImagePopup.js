import React from "react";
import cross from "../images/Vector(1).svg";

class ImagePopup extends React.Component {
  render() {
    return (
      <div className="popup popupImage" id="popup-image">
        <div className="popup__case">
          <img className="popup__image" src="/" alt="/" />
          <button className="popup__close-button" type="button">
            <img src={cross} alt="закрыть" className="popup__close-image" />
          </button>
          <h3 className="popup__image-title"></h3>
        </div>
      </div>
    );
  }
}
export default ImagePopup;
