import React from "react";
import PageTitle from "./../PageTitle/PageTitle";
import DialogItem from "./Components/DialogItem/DialogItem";
import Message from "./Components/Message/Message";
import NewMessage from "./Components/NewMessage/NewMessage";
import './Dialogs.css';





const Dialog = (props) => {
  let dialogsElements = props.data.map( (item, i) => {
    return (<DialogItem name={item.name} id={item.id}/>);
  });
  let messagesElements = props.data[0].messages.map( item => <Message message={item.message}/>)
  return(
          <div className="dialog">
            <div className="dialogsBlock">
              <PageTitle className="dialogsBlock__title" text="Сообщения"/>
              <ul className="dialogsList">
                {dialogsElements}
              </ul>  
            </div>
            <div className="messages">
              <div className="messagesBlock">
                {messagesElements}
              </div>
              <NewMessage />
            </div>
          </div>
  );
};//messagesBlock

export default Dialog;