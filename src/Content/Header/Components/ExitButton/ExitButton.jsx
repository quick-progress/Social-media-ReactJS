import React from "react";
import classes from './ExitButton.module.css'

const ExitButton = (props) => {
  return(
          <button className={classes.button}>
            <img src={props.src} alt={props.alt} className={`${classes.button__icon} ${props.lassName}`}></img>
            <span className={classes.button__text}>{props.text}</span>
          </button>
  );
}

export default ExitButton;