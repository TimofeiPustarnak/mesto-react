import React from "react";
import PopupWithForm from "../components/PopupWithForm";

class AddPlacePopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", link: "" };
  }

  handleChangeName(e) {
    this.setState({ name: e.target.value });
  }
  handleChangeLink(e) {
    this.setState({ link: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddCard(this.state.name, this.state.link);
  }
  handleAddPlaceSubmit(e) {
    e.preventDefault();
  }
  render() {
    return (
      <>
        <PopupWithForm
          onSubmit={this.handleSubmit.bind(this)}
          onClose={this.props.onClose}
          onOpen={this.props.onOpen}
          isOpen={this.props.isOpen}
          id="popup-card"
          class="AddCard"
          smallForm={false}
          titleContent="Новое место"
          additionalTitleClass=""
          submitValue="Создать"
          submitId="popup-addCard-button"
        >
          <div className="popup__input-wrapper">
            <input
              type="text"
              className="popup__field popup__field_type_name"
              name="title"
              id="title-input"
              placeholder="Название"
              required
              minLength="2"
              maxLength="30"
              value={this.state.name}
              onChange={this.handleChangeName.bind(this)}
            />
            <span className="popup__field-error" id="title-input-error"></span>
          </div>
          <div className="popup__input-wrapper">
            <input
              type="url"
              className="popup__field popup__field_type_description"
              id="link-input"
              name="link"
              placeholder="Ссылка на картинку"
              required
              value={this.state.link}
              onChange={this.handleChangeLink.bind(this)}
            />
            <span className="popup__field-error" id="link-input-error"></span>
          </div>
        </PopupWithForm>
      </>
    );
  }
}
export default AddPlacePopup;
