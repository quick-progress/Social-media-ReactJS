import React from "react";
import Post from './../Post/Post';
import AddPost from './../AddPost/AddPost';
import classes from './PostsBlock.module.css';

const PostsBlock = (props) => {
  let posts = props.posts.map( item => {
    return <Post className={classes.postsBlock__post} avatar={props.avatar} postDate={item.postDate} text={item.text}/>;
  });
  return(
          <div className={`${classes.postsBlock} ${props.className}`}>
            <AddPost className={classes.postsBlock__newPost} newPostText={props.posts.newPostText} dispatch={props.dispatch}/>
            <div className={classes.postsBlock__list}>
              {posts}
            </div>
          </div>
  );
};

export default PostsBlock;