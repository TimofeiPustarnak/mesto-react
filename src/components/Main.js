import React from "react";
import editImg from "../images/Vector.svg";
import cross from "../images/Vector(1).svg";
import api from "../utils/api";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Footer from "./Footer";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.handleCardLike = this.handleCardLike.bind(this);
    this.handleCardDelete = this.handleCardDelete.bind(this);
  }
  static contextType = CurrentUserContext;
  handleCardLike(card) {
    this.props.handleCardLike(card);
  }
  handleCardDelete(card) {
    this.props.handleCardDelete(card);
  }
  render() {
    // console.log(this.context._id);
    return (
      <>
        <section className="profile">
          <img
            src={this.context.avatar}
            alt="аватар"
            className="profile__avatar"
            onClick={this.props.onEditAvatar}
          />
          <div className="profile__avatar-edit"></div>
          <div className="profile__info">
            <div className="profile__edit">
              <h1 className="profile__title">{this.context.name}</h1>
              <button
                className="profile__edit-button"
                type="button"
                onClick={this.props.onEditProfile}
              >
                <img
                  src={editImg}
                  alt="редактировать"
                  className="profile__edit-image"
                />
              </button>
            </div>
            <p className="profile__subtitle">{this.context.about}</p>
          </div>
          <button
            className="profile__add-button"
            type="button"
            onClick={this.props.onAddPlace}
          >
            <img src={cross} alt="добавить" className="profile__add-image" />
          </button>
        </section>
        <section className="elements">
          {this.props.cards.map((card, i) => (
            <Card
              key={card._id}
              card={card}
              onCardClick={this.props.handleCardClick}
              onCardLike={this.handleCardLike}
              onCardDelete={this.handleCardDelete}
            />
          ))}
        </section>
        <Footer />
      </>
    );
  }
}
export default Main;
