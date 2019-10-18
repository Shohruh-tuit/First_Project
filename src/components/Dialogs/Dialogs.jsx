import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from 'react-router-dom';

const Dialogs = props => {
  return (
  <div className={s.dialogs}>
    <div className={s.dialogItems}>
      <div className={s.dialog + ' ' + s.active}>
        <NavLink to="/dialogs/1">Shohruh</NavLink>  
      </div>
      <div className={s.dialog}>
         <NavLink to="/dialogs/2">Alisher</NavLink>
      </div>
      <div className={s.dialog}>
      <NavLink to="/dialogs/3">Jovlon</NavLink>
      </div>
      <div className={s.dialog}>
      <NavLink to="/dialogs/4">Aziz</NavLink>
      </div>
      <div className={s.dialog}>
      <NavLink to="/dialogs/5">Suxrob</NavLink>
      </div>
    </div>
    <div className={s.messages}>
        <div className={s.message}>Salom</div>
        <div className={s.message}>Ishlar yaxwimi</div>
        <div className={s.message}>yaxwi raxmat!!!</div>
    </div>
  </div>
  );
};

export default Dialogs;
