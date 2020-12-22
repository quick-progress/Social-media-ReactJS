import React from "react";
import UserPhotoBlock from "./Components/UserPhotoBlock/UserPhotoBlock";
import MenuItems from "./Components/MenuItems/MenuItems";
import ExitButton from "./Components/ExitButton/ExitButton";
import './Header.css';

const Header = (props) => {

  return(
    <header className="header">
        <UserPhotoBlock className="header__person" name={props.name} photo={props.photo}/>
        <nav className="header__menu navbar">
          <ul className="header__list">
            <MenuItems link="/profile" image="img/icons/profile.svg" text="Профиль" alt="Профиль" data-page="profile" mode="active"/>
            <MenuItems link="/news" image="img/icons/news.svg" text="Новости" alt="Новости" data-page="news"/>
            <MenuItems link="/dialogs" image="img/icons/dialogs.svg" text="Диалоги" alt="Диалоги" data-page="dialogs"/>
            <MenuItems link="/music" image="img/icons/music.svg" text="Музыка" alt="Музыка" data-page="music"/>
            <MenuItems link="/settings" image="img/icons/settings.svg" text="Настройки" alt="Настройки" data-page="settings"/>
          </ul>
        </nav>
        <div className="header__exit-block">
          <ExitButton text="Выйти" src="img/icons/exit.svg" alt="Выйти" className="header__btn"/>
        </div>
      </header>
  );
};

export default Header;