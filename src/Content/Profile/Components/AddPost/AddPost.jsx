import React from "react";
import classes from './AddPost.module.css';

let textarea = React.createRef();

const AddPost = (props) => {
  const addNewPost = () => {
    props.addPost();
    props.changeNewPostText('');
  };

  const changeNewPostText = () => {
    let text = textarea.current.value;
    props.changeNewPostText(text);
  };

  return(
          <div className={`${classes.addPost} ${props.className}`}>
            <textarea className={classes.addPost__newPost} name="newPost" placeholder="Начните писать..." ref={textarea} value={props.newPostText} onChange={changeNewPostText}></textarea>
            <button className={classes.addPost__btn} onClick={addNewPost} >Опубликовать</button>
          </div>
  );
};

export default AddPost;