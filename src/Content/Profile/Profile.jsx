import React from "react";
import PhotoBlock from "./Components/PhotoBlock/PhotoBlock";
import ProfileCover from './Components/ProfileCover/ProfileCover';
import UserBlock from './Components/UserBlock/UserBlock';
import PostsBlock from './Components/PostsBlock/PostsBlock';
import './Profile.css';

const Settings = (props) => {

  return(
          <div className="profile">
            <ProfileCover className="profile__coverBlock" profileCover={props.userdata.profileCover}/>
            <div className="profile__userDataBlock">
              <PhotoBlock className="profile__photoBlock" photo={props.userdata.photo}/>
              <UserBlock userdata={props.userdata}/>
            </div>
            <PostsBlock posts={props.posts.posts} avatar={props.userdata.photo} dispatch={props.dispatch}/>
          </div>
  );
};

export default Settings;