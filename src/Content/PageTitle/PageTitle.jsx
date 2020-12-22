import React from "react";
import classes from './PageTitle.module.css';

const PageTitle = (props) => {
  return(
        <h2 className={`${classes.pageTitle} ${props.className}`}>{props.text}</h2>
  );
};

export default PageTitle;