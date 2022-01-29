import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';
import helpHttp from "../helpers/helpHttp.js";
import styles from "../styles/Table.module.css";

export const Table = () => {

    const [dataRes, setDataRes] = useState([]);

    useEffect(() => {
        helpHttp().get("http://localhost/smart-twigs/table.php")
    .then(res => {
        console.log(res);
        setDataRes(res);
    })
    .catch(err => console.log("error!: " + err));
    },[])

  return (
    <div className={styles.tableContainer}>
        <h2>Winners Table: </h2>
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Wins</th>
                    <th>Points</th>
                </tr>
            </thead>
            <tbody className={styles.tableBody}>
                {(dataRes !== [])
                    ? dataRes.map((el, key) => {
                        return (
                            <tr key={key}>
                                <td>{el.name}</td>
                                <td>{el.points_primary}</td>
                                <td>{el.points_secondary}</td>
                            </tr>
                        )
                    })
                    : "cargando"
                }
            </tbody>
        </table>
        <Link className={styles.returnHome} to="/">Home <img src="/assets/icons/home-arrow.svg" alt="arrow"/></Link>
    </div>
  );
};
