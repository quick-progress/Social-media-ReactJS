import React from "react";
import classes from './InputBlock.module.css'
import {
  changeUserPhotoActionCreator,
  changeUserNameActionCreator, 
  changeUserSurnameActionCreator,
  changeUserBirthdayActionCreator, 
  changeUserLoginActionCreator,
  changeUserLocationActionCreator,
  changeUserEmailActionCreator,
} from "./../../../../redux/user-reducer";

const InputBlock = (props) => {

  const changeUserInfo = (e) => {
    let info = e.target.value;
    switch(e.target.name) {
      case 'name':
        props.dispatch( changeUserNameActionCreator(info) );
        return;
      case 'surname':
        props.dispatch( changeUserSurnameActionCreator(info) );
        return;
      case 'birthday':
        props.dispatch( changeUserBirthdayActionCreator(info) );
        return;
      case 'login':
        props.dispatch( changeUserLoginActionCreator(info) );
        return;
      case 'location':
        props.dispatch( changeUserLocationActionCreator(info) );
        return;
      case 'email':
        props.dispatch( changeUserEmailActionCreator(info) );
        return;
      case 'photo':
        props.dispatch( changeUserPhotoActionCreator(info) );
        return;
      default: return;
    };
  };
  
  if (props.id !== '' && props.text !== '') {
    return(
            <div className={`${props.className} ${classes.inputBlock}`}>
              <label className={classes.label} for={props.id}>{props.text}</label>
              <input className={classes.input} type={props.type} name={props.name} value={props.value} placeholder={props.placeholder} onChange={changeUserInfo}></input>
            </div>
    );
  } else {
    return(
            <div className={props.className}>
              <input className={classes.input} type={props.type} name={props.name} value={props.value} placeholder={props.placeholder} onChange={changeUserInfo}></input>
            </div>
    );
  };
};

export default InputBlock;