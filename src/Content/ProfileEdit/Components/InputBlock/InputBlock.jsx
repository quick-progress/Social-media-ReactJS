import React from "react";
import classes from './InputBlock.module.css'

const InputBlock = (props) => {
  let id = (props.id !== '')? `id="${props.id}"`: '';
  
  if (props.id !== '' && props.text !== '') {
    return(
            <div className={`${props.className} ${classes.inputBlock}`}>
              <label className={classes.label} for={props.id}>{props.text}</label>
              <input className={classes.input} {...id} type={props.type} name={props.name} value={props.value} placeholder={props.placeholder}></input>
            </div>
    );
  } else {
    return(
            <div className={props.className}>
              <input className={classes.input} {...id} type={props.type} name={props.name} value={props.value} placeholder={props.placeholder}></input>
            </div>
    );
  };
};

export default InputBlock;