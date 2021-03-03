import React from "react";
import PopupWithForm from "../components/PopupWithForm";
class EditProfilePopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", description: "" };
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
          fieldsData={[
            {
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
      </>
    );
  }
}
export default EditProfilePopup;
