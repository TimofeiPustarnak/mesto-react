import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditProfilePopupOpen: false,
      isAddPlacePopupOpen: false,
      isEditAvatarPopupOpen: false,
      selectedCard: { isOpen: false, link: "", name: "" },
    };
  }
  handleEditAvatarClick() {
    this.setState({ isEditAvatarPopupOpen: true });
  }

  handleEditProfileClick() {
    this.setState({ isEditProfilePopupOpen: true });
  }

  handleAddPlaceClick() {
    this.setState({ isAddPlacePopupOpen: true });
  }
  handleCardClick(name, link) {
    this.setState({ selectedCard: { isOpen: true, link: link, name: name } });
  }
  closeAllPopups() {
    this.setState({
      isEditAvatarPopupOpen: false,
      isEditProfilePopupOpen: false,
      isAddPlacePopupOpen: false,
      selectedCard: { isOpen: false },
    });
  }
  render() {
    return (
      <div className="page">
        <Header />
        <Main
          onEditProfile={this.handleEditProfileClick.bind(this)}
          onAddPlace={this.handleAddPlaceClick.bind(this)}
          onEditAvatar={this.handleEditAvatarClick.bind(this)}
          handleCardClick={this.handleCardClick.bind(this)}
        />
        <Footer />
        <ImagePopup
          data={this.state.selectedCard}
          onClose={this.closeAllPopups.bind(this)}
        />
        <PopupWithForm
          onClose={this.closeAllPopups.bind(this)}
          isOpen={this.state.isEditAvatarPopupOpen}
          id="popup-avatar"
          class="EditAvatar"
          smallForm={false}
          titleContent="Обновить аватар"
          additionalTitleClass=""
          fieldsData={[
            {
              key: 1,
              type: "url",
              className: "popup__field_type_description",
              id: "link-input-edit",
              name: "link",
              placeholder: "Ссылка на картинку",
              minlength: "0",
              maxlength: "10000",
              spanId: "link-input-edit-error",
            },
          ]}
          submitValue="Сохранить"
          submitId="popup-edit-avatar-button"
        />
        <PopupWithForm
          onClose={this.closeAllPopups.bind(this)}
          isOpen={this.state.isAddPlacePopupOpen}
          id="popup-card"
          class="AddCard"
          smallForm={false}
          titleContent="Новое место"
          additionalTitleClass=""
          fieldsData={[
            {
              key: 1,
              type: "text",
              className: "popup__field_type_name",
              id: "title-input",
              name: "title",
              placeholder: "Название",
              minlength: "2",
              maxlength: "30",
              spanId: "title-input-error",
            },
            {
              key: 2,
              type: "url",
              className: "popup__field_type_description",
              id: "link-input",
              name: "link",
              placeholder: "Ссылка на картинку",
              minlength: "0",
              maxlength: "10000",
              spanId: "link-input-error",
            },
          ]}
          submitValue="Создать"
          submitId="popup-addCard-button"
        />
        <PopupWithForm
          onClose={this.closeAllPopups.bind(this)}
          isOpen={this.state.isEditProfilePopupOpen}
          id="popup-person"
          class="Person"
          smallForm={false}
          titleContent="Редактировать профиль"
          additionalTitleClass=""
          fieldsData={[
            {
              key: 1,
              type: "text",
              className: "popup__field_type_name",
              id: "name-input",
              name: "name",
              placeholder: "Имя",
              minlength: "2",
              maxlength: "40",
              spanId: "name-input-error",
            },
            {
              key: 2,
              type: "text",
              className: "popup__field_type_description",
              id: "description-input",
              name: "description",
              placeholder: "О себе",
              minlength: "2",
              maxlength: "200",
              spanId: "description-input-error",
            },
          ]}
          submitValue="Сохранить"
          submitId="popup-person-submit-button"
        />
        <PopupWithForm
          onClose={this.closeAllPopups.bind(this)}
          isOpen={false}
          id="popup-close"
          class="Confirm"
          smallForm={true}
          titleContent="Вы уверены?"
          additionalTitleClass="popup__title_popup-close"
          fieldsData={[]}
          submitValue="Да"
          submitId="popup-confirm-button"
        />
      </div>
    );
  }
}

export default App;
