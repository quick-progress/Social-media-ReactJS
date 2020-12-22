import React, { Component } from "react";
import classes from './MessagesBlock.module.css';
import Message from './../Message/Message';

const DailogsList = (props) => {
  return(
          <div className={classes.messagesBlock}>
            <Message message="Привет!"/>
            <Message message="Как дела?"/>
            <Message message="Шо делаешь?"/>
          </div>
  );
}

export default DailogsList;