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
let dialogsData = [
  {id: 1, name: 'Shohruh'},
  {id: 2, name: 'Alisher'},
  {id: 3, name: 'Jovlon'},
  {id: 4, name: 'Humoyun'},
  {id: 5, name: 'Suxrob'}
]
let messagesData = [
  {id: 1, messages: "Salom"},
  {id: 2, messages: "Ishlar yaxwimi"},
  {id: 3, messages: "yaxwi raxmat!!!"},
]
const Dialogs = props => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
        <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
      </div>
      <div className={s.messages}>
        <Message message={messagesData[0].messages} />
        <Message message={messagesData[1].messages} />
        <Message message={messagesData[2].messages} />
      </div>
    </div>
  );
}

export default Dialogs;