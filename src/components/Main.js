import React from "react";
import editImg from "../images/Vector.svg";
import user from "../images/user.png";
import cross from "../images/Vector(1).svg";
import deleteImg from "../images/Group.svg";
class Main extends React.Component {
  render() {
    return (
      <>
        <section className="profile">
          <img
            src={user}
            alt="аватар"
            className="profile__avatar"
            onClick={this.handleEditAvatarClick}
          />
          <div className="profile__avatar-edit"></div>
          <div className="profile__info">
            <div className="profile__edit">
              <h1 className="profile__title"></h1>
              <button
                className="profile__edit-button"
                type="button"
                onClick={this.handleEditProfileClick}
              >
                <img
                  src={editImg}
                  alt="редактировать"
                  className="profile__edit-image"
                />
              </button>
            </div>
            <p className="profile__subtitle"></p>
          </div>
          <button
            className="profile__add-button"
            type="button"
            onClick={this.handleAddPlaceClick}
          >
            <img src={cross} alt="добавить" className="profile__add-image" />
          </button>
        </section>
        <section className="elements">
          <template id="cards">
            <article className="elements__element">
              <img src={deleteImg} className="elements__delete" alt="удалить" />
              <img className="elements__image" src="/" alt="/" />
              <div className="elements__group">
                <p className="elements__title"></p>
                <div className="elements__group-like">
                  <div className="elements__like"></div>
                  <p className="elements__like-counter">0</p>
                </div>
              </div>
            </article>
          </template>
        </section>
      </>
    );
  }
}
export default Main;
