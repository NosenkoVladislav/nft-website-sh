import React from "react";

import styles from "./footer.module.css";

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

const Footer = () => {
  return (
    <div className={styles.footer}>
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
  )
};

export default Footer;