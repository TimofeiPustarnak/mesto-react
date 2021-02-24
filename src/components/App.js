// import pen from "./images/pen.svg";
import cross from "../images/Vector(1).svg";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />
      <div className="popup popupPerson" id="popup-person">
        <form
          className="popup__container"
          method="get"
          name="person-name-and-job"
          novalidate
        >
          <button className="popup__close-button" type="button">
            <img src={cross} alt="закрыть" className="popup__close-image" />
          </button>
          <h3 className="popup__title">Редактировать профиль</h3>
          <div className="popup__input-wrapper">
            <input
              type="text"
              className="popup__field popup__field_type_name"
              name="name"
              id="name-input"
              placeholder="Имя"
              required
              minlength="2"
              maxlength="40"
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
              minlength="2"
              maxlength="200"
            />
            <span
              className="popup__field-error"
              id="description-input-error"
            ></span>
          </div>
          <input
            type="submit"
            className="popup__submit-button"
            name="submit-button"
            value="Сохранить"
            id="popup-person-submit-button"
          />
        </form>
      </div>

      <div className="popup popupAddCard" id="popup-card">
        <form
          className="popup__container"
          method="get"
          name="card-link-&-title"
          novalidate
        >
          <button className="popup__close-button" type="button">
            <img src={cross} alt="закрыть" className="popup__close-image" />
          </button>
          <h3 className="popup__title">Новое место</h3>
          <div className="popup__input-wrapper">
            <input
              type="text"
              className="popup__field popup__field_type_name"
              name="title"
              id="title-input"
              placeholder="Название"
              required
              minlength="2"
              maxlength="30"
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
            />
            <span className="popup__field-error" id="link-input-error"></span>
          </div>
          <input
            type="submit"
            className="popup__submit-button"
            name="submit-button"
            value="Создать"
            id="popup-addCard-button"
          />
        </form>
      </div>

      <div className="popup popupImage" id="popup-image">
        <div className="popup__case">
          <img className="popup__image" src="/" alt="/" />
          <button className="popup__close-button" type="button">
            <img src={cross} alt="закрыть" className="popup__close-image" />
          </button>
          <h3 className="popup__image-title"></h3>
        </div>
      </div>

      <div className="popup popupConfirm" id="popup-close">
        <form
          className="popup__container popup__container_small"
          method="get"
          name="card-link-&-title"
          novalidate
        >
          <button className="popup__close-button" type="button">
            <img src={cross} alt="закрыть" className="popup__close-image" />
          </button>
          <h3 className="popup__title popup__title_popup-close">Вы уверены?</h3>
          <input
            type="button"
            className="popup__submit-button popup__submit-button-close"
            name="submit-button"
            id="popup-confirm-button"
            value="Да"
          />
        </form>
      </div>

      <div className="popup popupEditAvatar" id="popup-avatar">
        <form
          className="popup__container"
          method="get"
          name="card-link-&-title"
          novalidate
        >
          <button className="popup__close-button" type="button">
            <img src={cross} alt="закрыть" className="popup__close-image" />
          </button>
          <h3 className="popup__title">Обновить аватар</h3>
          <div className="popup__input-wrapper">
            <input
              type="url"
              className="popup__field popup__field_type_description"
              id="link-input-edit"
              name="link"
              placeholder="Ссылка на картинку"
              required
            />
            <span
              className="popup__field-error"
              id="link-input-edit-error"
            ></span>
          </div>
          <input
            type="submit"
            className="popup__submit-button"
            name="submit-button"
            value="Сохранить"
            id="popup-edit-avatar-button"
          />
        </form>
      </div>
    </div>
  );
}

export default App;
