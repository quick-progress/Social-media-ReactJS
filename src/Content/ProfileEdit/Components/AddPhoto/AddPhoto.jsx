import React from "react";
import classes from './AddPhoto.module.css';
import InputBlock from "./../../Components/InputBlock/InputBlock";


const AddPhoto = (props) => {
  return(
          <div className={classes.box}>
            <div className={`${classes.imageBox} ${props.className}`}>
              <img className={classes.image} src={props.photo} alt="Фото пользователя"/>
            </div>
            <InputBlock  className={classes.imgLink} id="image-link" type="text" name="photo" value={props.editphoto} placeholder={props.photo} text="Фото" dispatch={props.dispatch}/>
          </div>
  );
}

export default AddPhoto;