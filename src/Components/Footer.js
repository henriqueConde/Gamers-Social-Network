import React from 'react';
import styles from './Footer.module.css';
import { ReactComponent as Logo } from '../Assets/gameicon.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      ©  Gamer Social Network
    </footer>
  );
};

export default Footer;
