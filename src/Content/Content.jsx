import React, { Component } from "react";
import Header from "./Header/Header";
import Profile from "./Profile/Profile";
import './Content.css';

function Content() {
    return (
          <div className="content">
            <Header />
            <main className="main">
              <Profile />
            </main>
          </div>
    );
};

export default Content;