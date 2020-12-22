import React from "react";
import classes from './ProfileCover.module.css';

const ProfileCover = (props) => {
  return(
          <div className={`${classes.imgBox} ${props.className}`}>
            <img className={classes.cover} src={props.profileCover} alt="Обложка профиля"></img>
          </div>
  );
}

export default ProfileCover;