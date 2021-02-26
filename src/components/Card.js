import React from "react";
import deleteImg from "../images/Group.svg";

class Card extends React.Component {
  handleClick() {
    this.props.onCardClick(this.props.card.name, this.props.card.link);
  }
  render() {
    console.log(this.props.card);
    return (
      <article className="elements__element">
        <img src={deleteImg} className="elements__delete" alt="удалить" />
        <img
          className="elements__image"
          src={this.props.card.link}
          alt={this.props.card.name}
          onClick={this.handleClick.bind(this)}
        />
        <div className="elements__group">
          <p className="elements__title">{this.props.card.name}</p>
          <div className="elements__group-like">
            <div className="elements__like"></div>
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
