import React from "react";
import Header from "./Header/Header";
import Profile from "./Profile/Profile";
import News from "./News/News";
import Dialogs from "./Dialogs/Dialogs";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import {Route} from "react-router-dom";
import './Content.css';

function Content(props) {
    return (
          <div className="content">
            <Header photo={props.data.user.photo} name={props.data.user.name}/>
            <main className="main">
              <Route exact path="/profile" render={ () => <Profile userdata={props.data} addPost={props.addPost} changeNewPostText={props.changeNewPostText}/>}/>
              <Route exact path="/news" component={News}/>
              <Route exact path="/dialogs" render={ () => <Dialogs data={props.data.dialogs}/>}/>
              <Route exact path="/music" component={Music}/>
              <Route exact path="/settings" component={Settings}/>
            </main>
          </div>
    );
};

export default Content;