import React from "react";
import classes from './Message.module.css';

const Message = (props) => {
  let condition = (props.message.condition === 'read')? classes['message_read']: (props.message.condition === 'unread')? classes['message_unread']: '';
  let owner = (props.message.whose === 'my')? classes['message_my']: (props.message.whose === 'his')? classes['message_his']: '';

  return(
          <div className={`${classes.message} ${condition} ${owner}`} value={props.message.id}>
            <span className={classes.message__info}>{`${props.message.time}, ${props.message.date}`}</span>
            <div className={classes.message__wrap}>
              <span className={classes.message__text}>{props.message.message}</span>
            </div>
          </div>
  );
};

export default Message;