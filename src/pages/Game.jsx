import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import styles from '../styles/Game.module.css';
import { WinController } from '../hooks/WinController';

const Game = () => {

    const gameOptions = (window.localStorage.getItem("gameOptions")) ? JSON.parse(window.localStorage.getItem("gameOptions")) : false;

    const [gamer1points, setGamer1points] = useState(0);
    const [gamer2points, setGamer2points] = useState(0);
    const [countServer, setCountServer] = useState(0);
    const [turn, setTurn] = useState(gameOptions.server);
    const [server, setServer] = useState(gameOptions.server);

    useEffect(() => {
        let pointsCalculator1 = gamer1points - gamer2points;
        let pointsCalculator2 = gamer2points - gamer1points;
        
        if(server) {
            setCountServer(countServer+1);
        } else {
            setCountServer(countServer-1);
        }

        console.log(countServer);

        if(countServer > 2 || countServer < -2) {
            (server)  ? setServer(false) : setServer(true);

        }
        
        if(gamer1points > 5 && pointsCalculator1 > 2) {
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
            if(gamer2points > 5 && pointsCalculator2 > 2) {
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
    }, [gamer1points, gamer2points]);

  return (
      <div className={styles.gameContainer}>
          {(gameOptions) ? "" : <Navigate replace to="/"/>}
          <h2 className={styles.gameScore}>{gamer1points} - {gamer2points}</h2>
              <p className={styles.turnCounter}>Turno De: {(turn) ? gameOptions.player1 : gameOptions.player2}</p>
          <div className={styles.usersContainer}>
            <div className={styles.player1}>
                <button disabled={!turn}
                onClick={() => {
                    setGamer1points(gamer1points+1);
                    setTurn(false);
                }}>Score Point</button>
                <button disabled={!turn} onClick={() => {
                    setTurn(false);
                }}>Rebound</button>
            </div>
            <div className={styles.player2}>
            <button disabled={turn}
                onClick={() => {
                    setGamer2points(gamer2points+1);
                    setTurn(true);
                }}>Score Point</button>
                <button disabled={turn} onClick={() => {
                    setTurn(true);
                }}>Rebound</button>
            </div>
          </div>
      </div>
  );
};

export default Game;
