import React from 'react';
import styles from './Loading.module.css';

const Loading = () => {

  return (
    <div className={styles.loadingContainer}>
      <div className={styles.wrapper}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Loading;
