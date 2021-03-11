import React from "react";
import PopupWithForm from "../components/PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

class EditProfilePopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", description: "" };
  }

  handleChangeName(e) {
    this.setState({ name: e.target.value });
  }

  handleChangeDescription(e) {
    this.setState({ description: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(3);
    this.props.onUpdateUser(this.state.name, this.state.description);
  }
  static contextType = CurrentUserContext;
  componentDidMount() {
    this.setState({ name: this.context.name });
    this.setState({ description: this.context.about });
  }
  render() {
    return (
      <>
        <PopupWithForm
          onSubmit={this.handleSubmit.bind(this)}
          onClose={this.props.onClose}
          onOpen={this.props.onOpen}
          isOpen={this.props.isOpen}
          id="popup-person"
          class="Person"
          smallForm={false}
          titleContent="Редактировать профиль"
          additionalTitleClass=""
          value={[this.state.name, this.state.description]}
          submitValue="Сохранить"
          submitId="popup-person-submit-button"
        >
          <div className="popup__input-wrapper">
            <input
              type="text"
              className="popup__field popup__field_type_name"
              name="name"
              id="name-input"
              placeholder="Имя"
              required
              minLength="2"
              maxLength="40"
              value={this.state.name}
              onChange={this.handleChangeName.bind(this)}
            />
            <span className="popup__field-error" id="name-input-error"></span>
          </div>
          <div className="popup__input-wrapper">
            <input
              type="text"
              className="popup__field popup__field_type_description"
              id="description-input"
              name="description"
              placeholder="О себе"
              required
              minLength="2"
              maxLength="200"
              value={this.state.description}
              onChange={this.handleChangeDescription.bind(this)}
            />
            <span
              className="popup__field-error"
              id="description-input-error"
            ></span>
          </div>
        </PopupWithForm>
      </>
    );
  }
}
export default EditProfilePopup;
