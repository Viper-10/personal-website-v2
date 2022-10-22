import { useState } from "react";
import { BarChart } from ".";
import BarChartLogo from "../../assets/icons/BarChartLogo";
import ProgressBarLogo from "../../assets/icons/ProgressBarLogo";
import styles from "./style.module.css";
import ProgressBars from "./components/ProgressBars/ProgressBars";

const Languages = () => {
  const [index, setIndex] = useState(0);

  const activeStyle = {
    backgroundColor: "rgba(7, 151, 110, 0.2)",
  };

  const inactiveStyle = {
    backgroundColor: "transparent",
  };

  return (
    <div className={styles["skills"]} id="skills">
      <div className={styles["skills-header"]}>
        <h2 className="heading">Skills</h2>
        <div className={styles["toggle"]}>
          <div
            className={styles["toggle-item"]}
            style={index === 0 ? activeStyle : inactiveStyle}
            onClick={() => setIndex(0)}
          >
            <ProgressBarLogo color={index === 0 ? "#4dfed1" : "#fff"} />
          </div>
          <div
            className={styles["toggle-item"]}
            style={index === 1 ? activeStyle : inactiveStyle}
            onClick={() => setIndex(1)}
          >
            <BarChartLogo color={index === 1 ? "#4dfed1" : "#fff"} />
          </div>
        </div>
      </div>
      {index === 1 ? <BarChart /> : <ProgressBars />}
    </div>
  );
};

export default Languages;
