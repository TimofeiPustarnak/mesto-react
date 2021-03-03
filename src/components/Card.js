import React from "react";
import deleteImg from "../images/Group.svg";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.handleLikeClick = this.handleLikeClick.bind(this);
  }
  handleClick() {
    this.props.onCardClick(this.props.card.name, this.props.card.link);
  }
  handleLikeClick() {
    this.props.onCardLike(this.props.card);
  }
  handleDeleteClick() {
    this.props.onCardDelete(this.props.card);
  }
  static contextType = CurrentUserContext;

  render() {
    let isLike = false;
    for (let i = 0; i < this.props.card.likes.length; ++i) {
      if (this.props.card.likes[i]._id == this.context._id) isLike = true;
    }
    return (
      <article className="elements__element">
        {this.props.card.owner._id === this.context._id && (
          <img
            src={deleteImg}
            className="elements__delete"
            alt="удалить"
            onClick={this.handleDeleteClick.bind(this)}
          />
        )}
        <img
          className="elements__image"
          src={this.props.card.link}
          alt={this.props.card.name}
          onClick={this.handleClick.bind(this)}
        />
        <div className="elements__group">
          <p className="elements__title">{this.props.card.name}</p>
          <div className="elements__group-like">
            <div
              onClick={this.handleLikeClick}
              className={`elements__like ${isLike && "elements__like_active"}`}
            ></div>
            <p className="elements__like-counter">
              {this.props.card.likes.length}
            </p>
          </div>
        </div>
      </article>
    );
  }
}
export default Card;
