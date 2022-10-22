import { getIcon } from ".";
import styles from "./style.module.css";

const Card = ({ card }) => {
  return (
    <div className={styles["card"]}>
      {getIcon(card.title)}
      <h2 className={styles["card-title"]}>{card.title}</h2>
      <div className={styles["card-description"]}>{card.description}</div>
    </div>
  );
};

export default Card;
