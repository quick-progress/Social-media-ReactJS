import React from "react";
import classes from './UserPhotoBlock.module.css';

const UserPhotoBlock = (props) => {
  return(
        <div className={`${classes.person} ${props.className}`}>
          <div className={classes['person__photo-wrap']}>
            <img src={props.photo} alt="Фото профиля" className={classes.person__photo}></img>
          </div>
        <span className={classes.person__name}>{props.name}</span>
        </div>
  );
};

export default UserPhotoBlock;