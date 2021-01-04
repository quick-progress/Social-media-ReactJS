import React from "react";
import classes from './AddPost.module.css';
import {addPostActionCreator, changeNewPostActionCreator} from './../../../../redux/state';

let textarea = React.createRef();

const AddPost = (props) => {
  
  const addNewPost = () => {
    props.dispatch( addPostActionCreator() );
    props.dispatch( changeNewPostActionCreator('') );
  };

  const changeNewPostText = () => {
    let text = textarea.current.value;
    props.dispatch( changeNewPostActionCreator(text) );
  };

  const pressEnterObserver = (evnt) => {
    if (evnt.code !== 'Enter') return;
    evnt.preventDefault();
    addNewPost();
  };

  return(
          <div className={`${classes.addPost} ${props.className}`}>
            <textarea className={classes.addPost__newPost} name="newPost" placeholder="Начните писать..." ref={textarea} value={props.newPostText} onChange={changeNewPostText} onKeyPress={pressEnterObserver}></textarea>
            <button className={classes.addPost__btn} onClick={addNewPost}>Опубликовать</button>
          </div>
  );
};

export default AddPost;