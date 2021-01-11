import React from "react";
import s from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTelegramPlane,
  faStackOverflow
} from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.danniy}>
        {/* <div className={s.moon}><br/><br/><b>STATIC_X</b></div> */}
        <a href="http://localhost:3000/"> 
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ4ZjGsTvUeu3KmHsbaknwW7ayq66eJilK-elNuBjyfEbOuU2kW"
          />
        </a>
        <div className={s.item}>
          <FontAwesomeIcon icon={faStackOverflow} size="2px" />
          <b>Tel:</b> (90) 975-76-51
        </div>
        <div className={s.item}>
          <FontAwesomeIcon icon={faTelegramPlane} size="2px" />
          <b>Email:</b> Shohruhmasharipov49@gmail.com
        </div>
        <div className={s.item}>
          <FontAwesomeIcon icon={faFacebook} size="2px" />
          <b>Facebook:</b>
          <a href="https://www.facebook.com/shohruh.okayer?ref=bookmarks"> Shohruh.com</a>
        </div>
        <div className={s.item}>
          <FontAwesomeIcon icon={faInstagram} size="2px" />
          <b>Instagram:</b>
          <a href="https://instagram.com/i_shoxruh"> i_shoxruh</a>
        </div>
      </div>
    </header>
  );
};

export default Header;