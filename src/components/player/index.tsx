import React from "react";

import {Wallet} from "../../components";

import styles from "./player.module.css";

import player from "../../assets/player-frame.png";

const Player = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wallet}>
        <Wallet/>
      </div>
      <div>!!!!TEST!!!!</div>
      <img src={player} alt="Player" className={styles.playerImage}/>
    </div>
  )
};

export default Player;