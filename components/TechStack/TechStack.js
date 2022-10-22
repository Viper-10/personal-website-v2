import styles from "./style.module.css";
import Cards from "./Cards/Cards";
const Skills = () => {
  return (
    <div className={styles["skills"]} id="TechStack">
      <div className={styles["flex"]}>
        <h2 className={"heading"}>{"Stack"} </h2>
      </div>
      <Cards />
    </div>
  );
};

export default Skills;
