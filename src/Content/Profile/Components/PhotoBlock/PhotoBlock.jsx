import React from "react";
import classes from './PhotoBlock.module.css';

const PhotoBlock = (props) => {
  return(
          <div className={`${classes.photoBlock} ${props.className}`}>
            <div className={classes.photoWrap}>
              <img className={classes.photo} src={props.photo} alt="Обложка профиля"></img>
            </div>
            {/* <button className={classes.editBtn}>Изменить фото</button> */}
          </div>
  );
}

export default PhotoBlock;