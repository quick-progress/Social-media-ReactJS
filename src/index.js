import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import state, {addPost, changeNewPostText, subscribe} from './redux/state'
import {BrowserRouter} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import './index.css';

let renderDOMTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <App data={state} addPost={addPost} changeNewPostText={changeNewPostText}/>
      </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
  );
};
renderDOMTree()
subscribe(renderDOMTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
