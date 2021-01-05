import React from "react";
import AddPhoto from "./Components/AddPhoto/AddPhoto";
import FormTitle from "./Components/FormTitle/FormTitle";
import InputBlock from "./Components/InputBlock/InputBlock";
import Button from "./Components/Button/Button";
import './ProfileEdit.css';

const ProfileEdit = (props) => {

  return(
        <div className="ProfileEdit__content-block">
          <form className="ProfileEdit__person" action="#">
            <AddPhoto className="ProfileEdit__add-photo" photo={props.userdata.userdata.photo} editphoto={props.userdata.editdata.photo} dispatch={props.dispatch}/>
            <div className="ProfileEdit__input-block">
              <div className="ProfileEdit__input-group">
                <FormTitle className="ProfileEdit__group-title" text="Личное"/>
                <InputBlock  className="ProfileEdit__input" id="person-name" type="text" name="name" value={props.userdata.editdata.name} placeholder={props.userdata.userdata.name} text="Имя" dispatch={props.dispatch}/>
                <InputBlock  className="ProfileEdit__input" id="person-surname" type="text" name="surname" value={props.userdata.editdata.surname} placeholder={props.userdata.userdata.surname} text="Фамилия" dispatch={props.dispatch}/>
                <InputBlock  className="ProfileEdit__input" id="person-bithday" type="text" name="birthday" value={props.userdata.editdata.dateOfBirth} placeholder={props.userdata.userdata.dateOfBirth} text="Дата рождения" dispatch={props.dispatch}/>
              </div>
              <div className="ProfileEdit__input-group">
                <FormTitle className="ProfileEdit__group-title" text="Контакты"/>
                <InputBlock  className="ProfileEdit__input" id="person-login" type="text" name="login" value={props.userdata.editdata.login} placeholder={props.userdata.userdata.login} text="Логин" dispatch={props.dispatch}/>
                <InputBlock  className="ProfileEdit__input" id="person-phone" type="text" name="location" value={props.userdata.editdata.location} placeholder={props.userdata.userdata.location} text="Город" dispatch={props.dispatch}/>
                <InputBlock  className="ProfileEdit__input" id="person-email" type="email" name="email" value={props.userdata.editdata.email} placeholder={props.userdata.userdata.email} text="Электронная почта" dispatch={props.dispatch}/>
              </div>
            </div>
            <Button className="ProfileEdit__submit-btn" type="submit" text="Сохранить" dispatch={props.dispatch}/>
          </form>
        </div>
  );
};

export default ProfileEdit;