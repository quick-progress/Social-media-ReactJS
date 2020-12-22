import React from "react";
import PageTitle from "../PageTitle/PageTitle";
import AddPhoto from "./Components/AddPhoto/AddPhoto";
import FormTitle from "./Components/FormTitle/FormTitle";
import InputBlock from "./Components/InputBlock/InputBlock";
import Button from "./Components/Button/Button";
import './ProfileEditEdit.css';

const ProfileEdit = () => {
  return(
        <div className="ProfileEdit__content-block">
          <PageTitle className="ProfileEdit__title" text="Профиль"/>
          <form className="ProfileEdit__person" action="#">
            <AddPhoto className="ProfileEdit__add-photo"/>
            <div className="ProfileEdit__input-block">
              <div className="ProfileEdit__input-group">
                <FormTitle className="ProfileEdit__group-title" text="Личное"/>
                <InputBlock  className="ProfileEdit__input" id="person-name" type="text" name="username" value="Георгий" placeholder="Введите имя" text="Имя"/>
                <InputBlock  className="ProfileEdit__input" id="person-patronymic" type="text" name="userpatronymic" value="Сергеевич" placeholder="Введите отчество" text="Отчество"/>
                <InputBlock  className="ProfileEdit__input" id="person-surname" type="text" name="usersurname" value="Кузнецов" placeholder="Введите фамилию" text="Фамилия"/>
              </div>
              <div className="ProfileEdit__input-group">
                <FormTitle className="ProfileEdit__group-title" text="Контакты"/>
                <InputBlock  className="ProfileEdit__input" id="person-phone" type="tel" name="userphone" value="+79876543210" placeholder="Введите телефон" text="Телефон"/>
                <InputBlock  className="ProfileEdit__input" id="person-email" type="email" name="useremail" value="electron_mail@email.com" placeholder="Введите электронную почту" text="Электронная почта"/>
              </div>
            </div>
            <Button className="ProfileEdit__submit-btn" type="submit" text="Сохранить"/>
          </form>
        </div>
  );
};

export default ProfileEdit;