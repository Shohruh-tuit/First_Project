import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = props => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={path} activeClassName={s.activeLink}>
        {props.name}
      </NavLink>
    </div>
  );
}
const Message = (props) => {
  return(
    <div className={s.messages}>{props.message}</div>
  );
}

const Dialogs = props => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        <DialogItem name="Shohruh" id="1" />
        <DialogItem name="Alisher" id="2" />
        <DialogItem name="Jovlon" id="3" />
        <DialogItem name="Humoyun" id="4" />
        <DialogItem name="Suxrob" id="5" />
      </div>
      <div className={s.messages}>
        <Message message="Salom" />
        <Message message="Ishlar yaxwimi" />
        <Message message="yaxwi raxmat!!!" />
      </div>
    </div>
  );
}

export default Dialogs;