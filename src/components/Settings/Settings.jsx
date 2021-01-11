import React, { Component } from "react";
import s from "./Settings.module.css";

const Settings = () => {
  return (
    <div className={s.Settings}>
      <div> Setting is processing... </div>
      <div className={s.ldsring}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Settings;
