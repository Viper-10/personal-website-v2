import { useState } from "react";
import Icon from "./Icon";
import profiles from "./profiles.json";
import styles from "./style.module.css";
const SocialProfile = () => {
  const allIcons = profiles.map((iconInfo, index) => {
    return <Icon key={index} faIcon={iconInfo.faIcon} url={iconInfo.url} />;
  });

  return <aside className={styles["social-icon-container"]}>{allIcons}</aside>;
};

export default SocialProfile;
