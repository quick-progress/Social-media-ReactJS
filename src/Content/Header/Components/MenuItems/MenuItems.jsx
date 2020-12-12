import React, { Component } from "react";
import './MenuItems.module.css';

const MenuItems = (props) => {
  return(
        <li className="navbar__items navbar__items_active">
          <img className="navbar__icon" src="assets/img/icons/profile.svg" alt={props.alt} ></img>
          <span className="navbar__items-label" data-page={props['data-page']}>{props.text}</span>
        </li>
  );
};

export default MenuItems;