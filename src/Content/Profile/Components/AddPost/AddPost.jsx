import React from "react";
import classes from './AddPost.module.css';

let textarea = React.createRef();

const AddPost = (props) => {
  
  const addNewPost = () => {
    props.dispatch({type: 'ADD-POST'});
    props.dispatch({type: 'CHANGE-NEW-POST-TEXT', newText: ''});
  };

  const changeNewPostText = () => {
    let text = textarea.current.value;
    props.dispatch({type: 'CHANGE-NEW-POST-TEXT', newText: text});
  };

  return(
          <div className={`${classes.addPost} ${props.className}`}>
            <textarea className={classes.addPost__newPost} name="newPost" placeholder="Начните писать..." ref={textarea} value={props.newPostText} onChange={changeNewPostText}></textarea>
            <button className={classes.addPost__btn} onClick={addNewPost} >Опубликовать</button>
          </div>
  );
};

export default AddPost;