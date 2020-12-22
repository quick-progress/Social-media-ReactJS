import React from "react";
import classes from './NewMessage.module.css';

const NewMessage = (props) => {
  return(
          <div className={`${classes.newMessage} ${props.className}`}>
            
          </div>
  );
}

export default NewMessage;