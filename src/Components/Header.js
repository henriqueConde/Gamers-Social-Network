import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../Assets/gameicon.svg';
import { useSelector } from 'react-redux';

const Header = () => {
  const { data } = useSelector((state) => state.user);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Social Gamer - Home">
          <Logo />
        </Link>
        {data ? (
          <Link className={styles.login} to="/account">
            {data.name}
          </Link>
        ) : (
          <Link className={styles.login} to="/login">
            Login / Sign Up
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
