import React from "react";
import classes from './MessagesBlock.module.css';
import Message from './../Message/Message';

const MessagesBlock = (props) => { 
  let messagesItems = props.dialog.messages.map( item => {
    return (<Message message={item}/>);
  });
  
  return(
          <div className={`${classes.messagesBlock} ${props.className}`}>
            {messagesItems}
          </div>
  );
}

export default MessagesBlock;
