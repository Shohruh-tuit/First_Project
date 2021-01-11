import React, { Component } from 'react';
import s from './Music.module.css';
import MusicNames from '../Music/MusicNames/MusicNames';
import MusicAuthor from '../Music/MusicAuthor/MusicAuthor';


const Music = (props) => {
  let musicElements = props.musicNames.map( musicNames => {
    return <MusicNames id = {musicNames.id} musicname={musicNames.musicname}  />
  })

  let authorElements = props.musicAuthor.map( musicAuthor => {
    return <MusicAuthor author={musicAuthor.author}/>
  })
    return (
    <div className={s.Music}>
      <div className={s.MusicNames}>{musicElements}</div>
      
      <div className={s.MusicAuthor}>{authorElements}</div>
    </div>
    );
}

export default Music;