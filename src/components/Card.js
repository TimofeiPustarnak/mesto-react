import React from "react";
import deleteImg from "../images/Group.svg";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  handleClick() {
    this.props.onCardClick(this.props.name, this.props.link);
  }
  render() {
    return (
      <article className="elements__element" key={this.props.key}>
        <img src={deleteImg} className="elements__delete" alt="удалить" />
        <img
          className="elements__image"
          src={this.props.link}
          alt={this.props.name}
          onClick={this.handleClick.bind(this)}
        />
        <div className="elements__group">
          <p className="elements__title">{this.props.name}</p>
          <div className="elements__group-like">
            <div className="elements__like"></div>
            <p className="elements__like-counter">0</p>
          </div>
        </div>
      </article>
    );
  }
}
export default Card;
