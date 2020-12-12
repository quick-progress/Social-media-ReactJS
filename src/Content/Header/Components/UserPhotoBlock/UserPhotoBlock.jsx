import React, { Component } from "react";
import classes from './UserPhotoBlock.module.css';

const UserPhotoBlock = () => {
  return(
        <div className={classes.person}>
          <div className={`${classes['person__photo-wrap']} header__person`}>
            <img src="empty-photo.jpg" alt="Фото профиля" className={classes.person__photo}></img>
          </div>
          <span className={classes.person__name}>Георгий</span>
        </div>
  );
};

export default UserPhotoBlock;