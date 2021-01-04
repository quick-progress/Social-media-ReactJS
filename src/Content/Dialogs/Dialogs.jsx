import React from "react";
import {Route} from "react-router-dom";
import PageTitle from "./../PageTitle/PageTitle";
import DialogItem from "./Components/DialogItem/DialogItem";
import MessagesBlock from "./Components/MessagesBlock/MessagesBlock";
import NewMessage from "./Components/NewMessage/NewMessage";
import './Dialogs.css';





const Dialog = (props) => {

  let dialogsElements = props.data.dialogs.map( (item) => {
    return (<DialogItem dispatch={props.dispatch} name={item.name} id={item.id}/>);
  });
  
  let messagesBlocks = props.data.dialogs.map(  
    item => {
      return <Route exact path={`/dialogs/${item.id}`} render={ () => <MessagesBlock dialog={item} dispatch={props.dispatch}/>}/>
    }
  );


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
                {messagesBlocks}
              </div>
              <NewMessage dispatch={props.dispatch} newMessageText={props.data.newMessage.message} interlocutor={props.data.dailogs}/>
            </div>
          </div>
  );
};

export default Dialog;