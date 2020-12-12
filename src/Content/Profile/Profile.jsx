import React, { Component } from "react";
import './Profile.css';

const Profile = () => {
  return(
        <div className="main__content-block">
          <h2 className="main__title">Профиль</h2>
          <form className="main__person" action="#">
            <div className="main__input-block">
              <div className="main__input-group">
                <h3 className="main__group-title">Личное</h3>
                <label className="main__label" for="person-name">Имя</label>
                <input className="main__input personal-info" id="person-name" type="text" name="username" value="Георгий" placeholder="Введите имя"></input>
                <label className="main__label" for="person-patronymic">Отчество</label>
                <input className="main__input personal-info" id="person-patronymic" type="text" name="userpatronymic" value="Сергеевич" placeholder="Введите отчество"></input>
                <label className="main__label" for="person-surname">Фамилия</label>
                <input className="main__input personal-info" id="person-surname" type="text" name="usersurname" value="Кузнецов" placeholder="Введите фамилию"></input>
              </div>
              <div className="main__input-group">
                <h3 className="main__group-title">Контакты</h3>
                <label className="main__label" for="person-phone">Телефон</label>
                <input className="main__input personal-info" id="person-phone" type="tel" name="userphone" value="+79876543210" placeholder="Введите телефон"></input>
                <label className="main__label" for="person-email">Электронная почта</label>
                <input className="main__input personal-info" id="person-email" type="email" name="useremail" value="electron_mail@email.com" placeholder="Введите электронную почту"></input>
                <div className="main__add-email-wrap">
                  <span className="main__btn-discription">Добавьте дополнительную эл. почту</span>
                  <button className="main__delete-email">
                    <img src="assets/img/icons/delete.svg" alt="Удалить" className="main__delete-btn"></img>
                  </button>
                  <button className="main__mail-add">+ Добавить</button>
                </div>
              </div>
            </div>
            <div className="main__adress-group">
              <h3 className="main__group-title">Адрес</h3>
              <div className="main__adress-wrap">
                <div className="main__input-wrap">
                  <label className="main__label" for="post-index">Индекс</label>
                  <input className="main__input" id="post-index" type="text" value="644000"></input>
                </div>
                <div className="main__input-wrap">
                  <label className="main__label" for="town">Город</label>
                  <input className="main__input" id="town" type="text" value="Омск"></input>
                </div>
                <div className="main__input-wrap">
                  <label className="main__label" for="street">Улица</label>
                  <input className="main__input" id="street" type="text" value="Интернациональная"></input>
                </div>
                <div className="main__input-wrap">
                  <label className="main__label" for="house-number">Дом №, корпус</label>
                  <input className="main__input" id="house-number" type="text" value="7"></input>
                </div>
              </div>
            </div>
            <button className="main__submit-btn" type="submit">Сохранить</button>
          </form>
        </div>
  );
};

export default Profile;