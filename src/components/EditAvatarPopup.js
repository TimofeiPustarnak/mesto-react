import React from "react";
import PopupWithForm from "../components/PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

class EditAvatarPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { link: "" };
  }

  handleChangeLink(e) {
    this.setState({ link: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.onUpdateAvatar(this.state.link);
  }
  static contextType = CurrentUserContext;

  render() {
    return (
      <>
        <PopupWithForm
          onSubmit={this.handleSubmit.bind(this)}
          onClose={this.props.onClose}
          isOpen={this.props.isOpen}
          id="popup-avatar"
          class="EditAvatar"
          smallForm={false}
          titleContent="Обновить аватар"
          additionalTitleClass=""
          submitValue="Сохранить"
          submitId="popup-edit-avatar-button"
        >
          <div className="popup__input-wrapper">
            <input
              value={this.state.link}
              type="url"
              className="popup__field popup__field_type_description"
              id="link-input-edit"
              name="link"
              placeholder="Ссылка на картинку"
              required
              onChange={this.handleChangeLink.bind(this)}
            />
            <span
              className="popup__field-error"
              id="link-input-edit-error"
            ></span>
          </div>
        </PopupWithForm>
      </>
    );
  }
}
export default EditAvatarPopup;
