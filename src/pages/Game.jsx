import React, { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import styles from '../styles/Game.module.css';
import { WinController } from '../hooks/WinController';
import PopUp from '../components/PopUp';

const Game = () => {

    const gameOptions = (window.localStorage.getItem("gameOptions")) ? JSON.parse(window.localStorage.getItem("gameOptions")) : false;

    const [gamer1points, setGamer1points] = useState(0);
    const [gamer2points, setGamer2points] = useState(0);
    const [userAnotation, setUserAnotation] = useState("");
    const [popUp, setPopUp] = useState(false);
    const [turn, setTurn] = useState(gameOptions.server);

    useEffect(() => {
        let pointsCalculator = gamer1points - gamer2points;
        
        if(gamer1points !== 0 || gamer2points !== 0) {
            console.log("valor Cambiando!");
            setPopUp(true);
            setTimeout(() => {
                setPopUp(false);
            }, 2000);
        }
        
        if(gamer1points > 10 && pointsCalculator > 2) {
            alert(`The Player ${gameOptions.player1}`);
            let winData = {
                winner: {
                    name: gameOptions.player1,
                    points: gamer1points
                },
                loser: {
                    name: gameOptions.player2,
                    points: gamer2points
                }
            }
            WinController(winData);
            setGamer2points(0);
            setGamer1points(0);
        } else {
            console.log("Puntos diferencia: " + pointsCalculator);
            if(gamer2points > 10 && pointsCalculator < -2) {
                alert(`The Player ${gameOptions.player2}`);
                let winData = {
                    winner: {
                        name: gameOptions.player2,
                        points: gamer2points
                    },
                    loser: {
                        name: gameOptions.player1,
                        points: gamer1points
                    }
                }
                WinController(winData);
                setGamer1points(0);
                setGamer2points(0);
            }
        }
    }, [gameOptions.player1, gameOptions.player2, gamer1points, gamer2points]);

  return (
      <div className={styles.gameContainer}>
        {(gameOptions) ? "" : <Navigate replace to="/"/>}

        {(popUp) ? <PopUp player={userAnotation}/> : ""}
        <Link className={styles.backButton} to="/">Back</Link>
        <h2 className={styles.gameScore}>
            {gamer1points} - {gamer2points}
        </h2>
        <p className={styles.turnCounter}>
            Turno De: {(turn) ? gameOptions.player1 : gameOptions.player2}
        </p>
        <div className={styles.usersContainer}>
            <div className={styles.player1}>
                <button disabled={!turn}
                    onClick={() => {
                        setGamer1points(gamer1points+1);
                        setUserAnotation(gameOptions.player1);
                    }}>Score Point</button>
                <button disabled={!turn}
                    onClick={() => {
                        setTurn(false);
                    }}>Rebound</button>
            </div>
            <div className={styles.player2}>
                <button disabled={turn}
                    onClick={() => {
                        setGamer2points(gamer2points+1);
                        setUserAnotation(gameOptions.player2);
                    }}>Score Point</button>
                <button disabled={turn}
                    onClick={() => {
                        setTurn(true);
                    }}>Rebound</button>
            </div>
          </div>
      </div>
  );
};

export default Game;
