import React from "react";
import classes from './NewMessage.module.css';
import {addMessageActionCreator, changeNewMessageActionCreator} from './../../../../redux/state';

let newMessageText = React.createRef();

const NewMessage = (props) => {

  const addNewMessage = () => {
    props.dispatch( addMessageActionCreator() );
    props.dispatch( changeNewMessageActionCreator('') );
  };

  const changeNewPostText = () => {
    let text = newMessageText.current.value;
    props.dispatch( changeNewMessageActionCreator(text) );
  };

  const pressEnterObserverMessage = (evnt) => {
    if (evnt.code !== 'Enter') return;
    evnt.preventDefault();
    addNewMessage();
  };

  return(
          <div className={`${classes.newMessage} ${props.className}`}>
            <textarea className={classes.newMessage__input} rows="1" type="text" placeholder="Начните писать..." value={props.newMessageText} ref={newMessageText} onChange={changeNewPostText} onKeyPress={pressEnterObserverMessage} resize="false"></textarea>
            <button className={classes.newMessage__submit} onClick={addNewMessage}>
              <img src="img/icons/send.svg" alt="Кнопка отправки" className={classes.newMessage__send}/>
            </button>
          </div>
  );
};

export default NewMessage;