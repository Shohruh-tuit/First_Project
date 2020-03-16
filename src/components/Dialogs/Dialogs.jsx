import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = props => {

  let dialogsElements = props.dialogs.map(dialogs => {
    return <DialogItem name={dialogs.name} id={dialogs.id} />;
  });
  let messagesElements = props.messages.map(messages => {
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
