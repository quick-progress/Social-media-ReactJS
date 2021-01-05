import React from "react";
import {NavLink} from 'react-router-dom';
import classes from './DialogItem.module.css';
import {changeRecipientActionCreator} from './../../../../redux/dialog-reducer';


const DialogItem = (props) => {
  let path = `/dialogs/${props.id}`;

  const changeRecipient = () => {
    props.dispatch( changeRecipientActionCreator(props.id) );
  };

  return(
          <li className={classes.dialogItem} onClick={changeRecipient}>
            <NavLink activeClassName={classes.dialogItem__link_active} className={`${classes.dialogItem__link} ${props.className}`} to={path}>
              {props.name}
            </NavLink>
          </li>
  );
};

export default DialogItem;  