import React, { Component } from "react";
import UserPhotoBlock from "./Components/UserPhotoBlock/UserPhotoBlock";
import MenuItems from "./Components/MenuItems/MenuItems";
import './Header.css';

const Header = () => {

  return(
    <header className="header">
        <UserPhotoBlock />
        <nav className="header__menu navbar">
          <ul className="navbar__list">
            <MenuItems text="Профиль" alt="Профиль" data-page="profile"/>
            <MenuItems text="Курсы" alt="Курсы" data-page="cources"/>
            <MenuItems text="Статистика" alt="Статистика" data-page="statistic"/>
            <MenuItems text="Помощь" alt="Помощь" data-page="help"/>
          </ul>
          <div className="navbar__exit-block">
            <button className="navbar__btn">
              <img src="assets/img/icons/exit.svg" alt="Выйти" className="navbar__icon"></img>
              <span className="navbar__btn-text">Выйти</span>
            </button>
          </div>
        </nav>
      </header>
  );
};

export default Header;