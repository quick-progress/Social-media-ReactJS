import React from "react";
import classes from './Post.module.css';

const UserBlock = (props) => {
  return(
          <div className={`${classes.post} ${props.className}`}>
            <div className={classes.post__photo}>
              <img src={props.avatar} alt="Аватарка" className={classes.post__avatar}/>
            </div>
            <div className={classes.post__discription}>
              <p className={classes.post__text}>{props.text}</p>
              <div className={classes.post__info}>
                <span className={classes.post__date}>{`${props.postDate.time}, ${props.postDate.date}`}</span>
              </div>
            </div>
          </div>
  );
};

export default UserBlock;