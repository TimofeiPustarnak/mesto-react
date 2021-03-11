import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
<<<<<<< HEAD
import Login from "./Login";
import Register from "./Register";
import api from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import { Route, Switch } from "react-router-dom";
=======
import api from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
>>>>>>> 5bc49c1404a0f3aa113e4ec1372ea1b8cf233f16

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditProfilePopupOpen: false,
      isAddPlacePopupOpen: false,
      isEditAvatarPopupOpen: false,
      selectedCard: { isOpen: false, link: "", name: "" },
      currentUser: false,
<<<<<<< HEAD
      loggedIn: false,
=======
      cards: [],
>>>>>>> 5bc49c1404a0f3aa113e4ec1372ea1b8cf233f16
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
  handleUpdateUser(name, about) {
    console.log(name);
    console.log(about);
    api
      .patchUserInfo(name, about)
      .then((data) => {
        this.setState({ currentUser: data });
        this.closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  handleUpdateAvatar(link) {
    console.log(link);
    api
      .editAvatar(link)
      .then((data) => {
        this.setState({ currentUser: data });
        this.closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  closeAllPopups() {
    this.setState({
      isEditAvatarPopupOpen: false,
      isEditProfilePopupOpen: false,
      isAddPlacePopupOpen: false,
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
    api
      .getInitialCards()
      .then((data) => {
        this.setState({
          cards: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleCardLike(card) {
    let isLiked = false;
    for (let i = 0; i < card.likes.length; ++i) {
      if (card.likes[i]._id === this.state.currentUser._id) isLiked = true;
    }
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        const newCards = this.state.cards.map((c) =>
          c._id === card._id ? newCard : c
        );
        this.setState({ cards: newCards });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  handleCardDelete(сard) {
    api
      .deleteCard(сard._id)
      .then((newCard) => {
        const newCards = this.state.cards.filter((c) => c._id !== сard._id);
        this.setState({ cards: newCards });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  handleAddCard(name, link) {
    api
      .addCard(name, link)
      .then((newCard) => {
        this.setState({ cards: [newCard, ...this.state.cards] });
        this.closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <CurrentUserContext.Provider value={this.state.currentUser}>
        <div className="page">
<<<<<<< HEAD
          <Header linkPath="/sign-up" linkText="Войти" />
          <Switch>
            <Route path="/sign-up"></Route>
            <Route path="/sign-in">
              <Login />
            </Route>
            <Route exact path="/">
              <Main
                onEditProfile={this.handleEditProfileClick.bind(this)}
                onAddPlace={this.handleAddPlaceClick.bind(this)}
                onEditAvatar={this.handleEditAvatarClick.bind(this)}
                handleCardClick={this.handleCardClick.bind(this)}
              />
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
              <EditProfilePopup
                onOpen={this.handleEditProfileClick.bind(this)}
                onClose={this.closeAllPopups.bind(this)}
                isOpen={this.state.isEditProfilePopupOpen}
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
              <Footer />
            </Route>
          </Switch>
=======
          <Header />
          <Main
            handleCardLike={this.handleCardLike.bind(this)}
            handleCardDelete={this.handleCardDelete.bind(this)}
            cards={this.state.cards}
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
          <EditAvatarPopup
            onUpdateAvatar={this.handleUpdateAvatar.bind(this)}
            onClose={this.closeAllPopups.bind(this)}
            isOpen={this.state.isEditAvatarPopupOpen}
          ></EditAvatarPopup>
          <AddPlacePopup
            onAddCard={this.handleAddCard.bind(this)}
            onOpen={this.handleAddPlaceClick.bind(this)}
            onClose={this.closeAllPopups.bind(this)}
            isOpen={this.state.isAddPlacePopupOpen}
          ></AddPlacePopup>
          <EditProfilePopup
            onUpdateUser={this.handleUpdateUser.bind(this)}
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
>>>>>>> 5bc49c1404a0f3aa113e4ec1372ea1b8cf233f16
        </div>
      </CurrentUserContext.Provider>
    );
  }
}

export default App;
