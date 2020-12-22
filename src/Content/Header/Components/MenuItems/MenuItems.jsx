import React from "react";
import { NavLink } from "react-router-dom";
import classes from './MenuItems.module.css';

const MenuItems = (props) => {
  return(
        <li className={classes.menuItem}>
          <NavLink activeClassName={classes.link_active} className={classes.link} to={props.link}>
            <img className={classes.icon} src={props.image} alt={props.alt} ></img>
            <span className={classes.label} data-page={props['data-page']}>{props.text}</span>
          </NavLink>
        </li>
  );
};

export default MenuItems;