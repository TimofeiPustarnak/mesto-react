import React from "react";
import PopupWithForm from "../components/PopupWithForm";
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

  render() {
    return (
      <>
        <PopupWithForm
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
