import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
    faTelegramPlane,
    faStackOverflow,
    faBlackberry,
    faFacebookMessenger,
} from "@fortawesome/free-brands-svg-icons";
import { faBasketballBall, faBlenderPhone, faUser, faNewspaper, faMusic, faAssistiveListeningSystems, faWrench } from "@fortawesome/free-solid-svg-icons"


// let s = {
//   'nav': 'Navbar_nav__1QK-6',
//   'item': 'Navbar_item__2derw',
// }

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <FontAwesomeIcon  icon={faUser} size="2px"/>
        <NavLink to="/profile" activeClassName={s.activeLink}> Profile</NavLink>
      </div>
      <div className={s.item}>
        <FontAwesomeIcon  icon={faFacebookMessenger} size="2px"/>
        <NavLink to="/dialogs" activeClassName={s.activeLink}> Messages</NavLink>
      </div>
      <div className={s.item}>
        <FontAwesomeIcon  icon={faNewspaper} size="2px"/>
        <NavLink to="/news" activeClassName={s.activeLink}> News</NavLink>
      </div>
      <div className={s.item}>
        <FontAwesomeIcon  icon={faMusic} size="2px"/>
        <NavLink to="/music" activeClassName={s.activeLink}> Music</NavLink>
      </div>
      <div className={s.item}>
        <FontAwesomeIcon  icon={faWrench} size="2px"/>
        <NavLink to="/settings" activeClassName={s.activeLink}> Settings</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
