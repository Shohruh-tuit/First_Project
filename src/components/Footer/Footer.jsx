import React from 'react';
import s from './Footer.module.css'

const Footer = () => {
    return (
      <footer className={s.footer}> 
       <div className={s.logo}>
          Epsilon-development.com 
       </div>
      </footer>
    );
}

export default Footer;