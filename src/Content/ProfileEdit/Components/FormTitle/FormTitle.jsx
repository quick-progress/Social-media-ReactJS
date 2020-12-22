import React from "react";
import classes from './FormTitle.module.css'

const FormTitle = (props) => {
  return(
          <h3 className={`${classes.title} ${props.className}`}>{props.text}</h3>
  );
}

export default FormTitle;