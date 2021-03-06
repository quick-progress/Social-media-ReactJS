import React from "react";
import "./App.css";
import Content from "./Content/Content";

function App(props) {
  return <Content data={props.data} dispatch={props.dispatch}/>;
};

export default App;
