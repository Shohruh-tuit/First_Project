import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = props => {
  let dialogs = [
    { id: 1, name: "Shohruh" },
    { id: 2, name: "Alisher" },
    { id: 3, name: "Jovlon" },
    { id: 4, name: "Humoyun" },
    { id: 5, name: "Suxrob" }
  ];
  let messages = [
    { id: 1, message: "Salom" },
    { id: 2, message: "Ishlar yaxwimi" },
    { id: 3, message: "yaxwi raxmat!!!" }
  ];
  let dialogsElements = dialogs.map(dialogs => {
    return <DialogItem name={dialogs.name} id={dialogs.id} />;
  });
  let messagesElements = messages.map(messages => {
    return <Message message={messages.message} />;
  });

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>{dialogsElements}</div>

      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
