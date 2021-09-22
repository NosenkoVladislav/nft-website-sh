import React from "react";

import styles from "./header.module.css";

import logo from "../../assets/sol-hub-logo.svg";
import discord from "../../assets/discord.svg";
import twitter from "../../assets/twitter.svg";

const socialLinks = [
  {
    id: 0,
    name: "Twitter",
    img: twitter,
    url: "",
  },
  {
    id: 1,
    name: "Discord",
    img: discord,
    url: "",
  },
];

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <img className={styles.logo} src={logo} alt="Solana Hub"/>
        <div className={styles.social}>
          {
            socialLinks.map(el => <a
              key={el.id}
              href={el.url}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className={styles.socialLink}
            ><img src={el.img} alt={el.name}/></a>)
          }
        </div>
      </div>
    </div>
  )
};

export default Header;