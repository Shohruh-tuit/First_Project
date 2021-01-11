import React, { Component } from "react";
import s from "./News.module.css";

const News = () => {
  return (
    <div className={s.News}>
      <div> News is processing... </div>
      <div class={s.ldsring}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default News;
