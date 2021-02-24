import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

class App extends React.Component {
  handleEditAvatarClick() {
    document.querySelector("#popup-avatar").classList.add("popup_opened");
  }

  handleEditProfileClick() {
    document.querySelector("#popup-person").classList.add("popup_opened");
  }

  handleAddPlaceClick() {
    document.querySelector("#popup-card").classList.add("popup_opened");
  }
  render() {
    return (
      <div className="page">
        <Header />
        <Main />
        <Footer />
        <ImagePopup />
        <PopupWithForm
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
