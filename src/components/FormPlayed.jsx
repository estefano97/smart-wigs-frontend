import React from 'react';
import styles from '../styles/FormPlayed.module.css';
import { controllerSubmit } from '../hooks/FormController';

const FormPlayed = () => {
  return (
    <form className={styles.formContainer} onSubmit={controllerSubmit}>
        <div className={styles.inputContainer}>
            <label htmlFor="name_user">Insert Your Name Player 1:</label>
            <input className={styles.input1} type="text" name="name_user1" id="name_user1" />
        </div>
        <div className={styles.inputContainer}>
            <label htmlFor="name_user">Insert Your Name Player 2:</label>
            <input className={styles.input2} type="text" name="name_user2" id="name_user2" />
        </div>
        <h3>The server will... 
          <select name="server" id="server">
            <option value="true">Player 1</option>
            <option value="false">Player 2</option>
          </select>
        </h3>
            <input type="submit" value="Go!"/>
    </form>
  );
};

export default FormPlayed;