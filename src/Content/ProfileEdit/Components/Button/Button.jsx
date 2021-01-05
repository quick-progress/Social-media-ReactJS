import React from "react";
import classes from './Button.module.css'
import {
  updateUserInfoActionCreator,
  changeUserPhotoActionCreator,
  changeUserNameActionCreator, 
  changeUserSurnameActionCreator,
  changeUserBirthdayActionCreator, 
  changeUserLoginActionCreator,
  changeUserLocationActionCreator,
  changeUserEmailActionCreator,
} from "./../../../../redux/user-reducer";

const Button = (props) => {

  const updateUserInfo = (e) => {
  e.preventDefault();
  props.dispatch( updateUserInfoActionCreator() );
  props.dispatch( changeUserPhotoActionCreator('') );
  props.dispatch( changeUserNameActionCreator('') );
  props.dispatch( changeUserSurnameActionCreator('') );
  props.dispatch( changeUserBirthdayActionCreator('') );
  props.dispatch( changeUserLoginActionCreator('') );
  props.dispatch( changeUserLocationActionCreator('') );
  props.dispatch( changeUserEmailActionCreator('') );
  };

  return(
          <button className={`${classes.button} ${props.className}`} type={props.type} onClick={updateUserInfo}>{props.text}</button>
  );
}

export default Button;