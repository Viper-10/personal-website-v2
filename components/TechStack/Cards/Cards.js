import { Card } from "./Card/";
import styles from "./style.module.css";
import techStack from "./techstack.json";

const Cards = () => {
  const cards = techStack.map((card, index) => (
    <Card key={index} card={card} />
  ));

  return <div className={styles["cards"]}>{cards}</div>;
};

export default Cards;
