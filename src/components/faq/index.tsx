import React from "react";

import styles from "./faq.module.css";

const faqList = [
  {
    id: 0,
    title: "How can I participate in the sale?",
    text: `Every whitelisted user can participate in the sale. Whitelisting will take 2 minutes for you, join our Discord server and follow next steps: <a href="!!!!!!TODO CHANGE ME!!!!!!!" target="_blank" rel="nofollow noopener noreferrer">Discord</a>`,
  },
  {
    id: 1,
    title: "How many SOLANAHUB can I mint?",
    text: "Unlimited.",
  },
  {
    id: 2,
    title: "How much does It cost to mint SOLANAHUB?",
    text: "Just 0.1 SOL",
  },
  {
    id: 3,
    title: "Can I watch this videos?",
    text: "Maybe. But hopefully the community will come up with a way to do It!",
  },
  {
    id: 4,
    title: "How SOLANAHUB are there in total?",
    text: "There are 10,000 SOLANAHUB in total, of which 100 are reserved for the giveaways for community.",
  },
  {
    id: 5,
    title: "Can I make meme with SOLANAHUB?",
    text: "YES! You have to make that! Image what’s going on in the player, share more ideas for title or even record your own videos based on the title ;)",
  }
]

const Faq = () => {
  return (
    <div className={styles.section}>
      <div className={styles.sectionTitle}>FAQ:</div>
      <div className={styles.faqList}>
        {faqList.map(el => {
          return (
            <div key={el.id} className={styles.faqItem}>
              <div className={styles.title}>{el.title}</div>
              <div className={styles.text} dangerouslySetInnerHTML={{ __html: el.text }}></div>
            </div>
          )
        })}
      </div>
    </div>
  )
};

export default Faq;