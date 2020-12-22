import React from "react";
import DialogItem from './../DialogItem/DialogItem';
import classes from './DailogsList.module.css';

const DailogsList = (props) => {
  return(
          <ul className={classes.dialogsList}>
            <DialogItem name="Марк" id="mark123456"/>
            <DialogItem name="Валентин" id="valentin12456"/>
            <DialogItem name="Павел" id="pavel12456"/>
            <DialogItem name="Андрей" id="Andrey123456"/>
          </ul>  
  );
}

export default DailogsList;