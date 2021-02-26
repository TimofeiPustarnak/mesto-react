import React from "react";
import editImg from "../images/Vector.svg";
import cross from "../images/Vector(1).svg";
import api from "../utils/Api";
import Card from "./Card";
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      userDescription: "",
      userAvatar: "",
      cards: [],
    };
  }
  componentDidMount() {
    api
      .getUserInfo()
      .then((data) => {
        this.setState({
          userName: data.name,
          userDescription: data.about,
          userAvatar: data.avatar,
        });
      })
      .catch((err) => {
        console.log(err);
      });
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
  render() {
    return (
      <>
        <section className="profile">
          <img
            src={this.state.userAvatar}
            alt="аватар"
            className="profile__avatar"
            onClick={this.props.onEditAvatar}
          />
          <div className="profile__avatar-edit"></div>
          <div className="profile__info">
            <div className="profile__edit">
              <h1 className="profile__title">{this.state.userName}</h1>
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
            <p className="profile__subtitle">{this.state.userDescription}</p>
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
            />
          ))}
        </section>
      </>
    );
  }
}
export default Main;
