import React from 'react';
import styles from '../styles/Anotation.module.css';

const PopUp = ({ player }) => {

  return (
      <div className={styles.PopUpContainer}>
        <div className={styles.PopUpContent}>
          <h2>{player} scored a point!</h2>
          <img src="/assets/videos/ping-pong-gif.gif" alt="" />
        </div>
      </div>
  );
};

export default PopUp;