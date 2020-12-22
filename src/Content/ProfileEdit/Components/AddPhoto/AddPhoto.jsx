import React from "react";
import classes from './AddPhoto.module.css';

const AddPhoto = (props) => {
  return(
          <div className={`${classes.box} ${props.className}`}>
            <input className={classes.input} name="userphoto" type="file" accept="image/*,image/jpeg"></input>
            <div className={classes.plus}>
              <span className={`${classes.plus__horizontalLine} ${classes.plus__line}`}></span>
              <span className={`${classes.plus__verticalLine} ${classes.plus__line}`}></span>
            </div>
          </div>
  );
}

export default AddPhoto;