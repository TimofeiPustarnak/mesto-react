import React from "react";
import editImg from "../images/Vector.svg";
import cross from "../images/Vector(1).svg";
import api from "../utils/Api";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
    };
    this.handleCardLike = this.handleCardLike.bind(this);
    this.handleCardDelete = this.handleCardDelete.bind(this);
  }
  static contextType = CurrentUserContext;
  componentDidMount() {
    api
      .getInitialCards()
      .then((data) => {
        this.setState({
          cards: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  handleCardLike(card) {
    let isLiked = false;
    for (let i = 0; i < card.likes.length; ++i) {
      if (card.likes[i]._id == this.context._id) isLiked = true;
    }
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        const newCards = this.state.cards.map((c) =>
          c._id === card._id ? newCard : c
        );
        this.setState({ cards: newCards });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  handleCardDelete(сard) {
    api
      .deleteCard(сard._id)
      .then((newCard) => {
        const newCards = this.state.cards.filter((c) => c._id != сard._id);
        this.setState({ cards: newCards });
      })
      .catch((err) => {
        console.log(err);
      });
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
          {this.state.cards.map((card, i) => (
            <Card
              key={card._id}
              card={card}
              onCardClick={this.props.handleCardClick}
              onCardLike={this.handleCardLike}
              onCardDelete={this.handleCardDelete}
            />
          ))}
        </section>
      </>
    );
  }
}
export default Main;
