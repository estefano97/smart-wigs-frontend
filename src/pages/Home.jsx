import React from 'react';
import FormPlayed from '../components/FormPlayed';
import styles from '../styles/Home.module.css';

const Home = () => {

  window.localStorage.removeItem("gameOptions");
  
  return (
    <div>
      <div className={styles.titleHome}>
        <h1>Hello!, Welcome to the Ping Pong Game!</h1>
        <p className={styles.leyenda}><i>create by estefano chuquicusma ;)</i></p>
        <img src="/assets/icons/ping-pong-icon.png" alt="icon" />
      </div>
      <FormPlayed/>
    </div>
  );
};

export default Home;
