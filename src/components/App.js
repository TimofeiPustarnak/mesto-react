import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditProfilePopupOpen: false,
      isAddPlacePopupOpen: false,
      isEditAvatarPopupOpen: false,
      selectedCard: { isOpen: false, link: "", name: "" },
      currentUser: false,
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

  componentDidMount() {
    api
      .getUserInfo()
      .then((data) => {
        this.setState({ currentUser: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <CurrentUserContext.Provider value={this.state.currentUser}>
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
            value={["link"]}
            onClose={this.closeAllPopups.bind(this)}
            isOpen={this.state.isEditAvatarPopupOpen}
            id="popup-avatar"
            class="EditAvatar"
            smallForm={false}
            titleContent="Обновить аватар"
            additionalTitleClass=""
            submitValue="Сохранить"
            submitId="popup-edit-avatar-button"
          ></PopupWithForm>
          <PopupWithForm
            value={["title", "link"]}
            onClose={this.closeAllPopups.bind(this)}
            isOpen={this.state.isAddPlacePopupOpen}
            id="popup-card"
            class="AddCard"
            smallForm={false}
            titleContent="Новое место"
            additionalTitleClass=""
            submitValue="Создать"
            submitId="popup-addCard-button"
          ></PopupWithForm>
          <EditProfilePopup
            onOpen={this.handleEditProfileClick.bind(this)}
            onClose={this.closeAllPopups.bind(this)}
            isOpen={this.state.isEditProfilePopupOpen}
          />
          <PopupWithForm
            value={[]}
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
          ></PopupWithForm>
        </div>
      </CurrentUserContext.Provider>
    );
  }
}

export default App;
