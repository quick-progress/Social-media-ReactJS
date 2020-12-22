import React from "react";
import classes from './UserBlock.module.css';

const UserBlock = (props) => {
  return(
          <div className={`${classes.userDataBlock} ${props.className}`}>
            <div className={classes.userDataBlock__userdata}>
              <h3 className={classes.userDataBlock__name}>{`${props.userdata.name} ${props.userdata.surname}`}</h3>
              <ul className={classes.userDataBlock__infoList}>
                <li className={classes.userDataBlock__infoItem}>{props.userdata.dateOfBirth}</li>
                <li className={classes.userDataBlock__infoItem}>{props.userdata.location}</li>
              </ul>
            </div>
            <button className={classes.userDataBlock__edit}>Редактировать</button>
          </div>
  );
}

export default UserBlock;