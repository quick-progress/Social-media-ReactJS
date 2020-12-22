import React from "react";
import PhotoBlock from "./Components/PhotoBlock/PhotoBlock";
import ProfileCover from './Components/ProfileCover/ProfileCover';
import UserBlock from './Components/UserBlock/UserBlock';
import PostsBlock from './Components/PostsBlock/PostsBlock';
import './Profile.css';

const Settings = (props) => {
  return(
          <div className="profile">
            <ProfileCover className="profile__coverBlock" profileCover={props.userdata.user.profileCover}/>
            <div className="profile__userDataBlock">
              <PhotoBlock className="profile__photoBlock" photo={props.userdata.user.photo}/>
              <UserBlock userdata={props.userdata.user}/>
            </div>
            <PostsBlock posts={props.userdata.postPage} avatar={props.userdata.user.photo} addPost={props.addPost} changeNewPostText={props.changeNewPostText}/>
          </div>
  );
};

export default Settings;