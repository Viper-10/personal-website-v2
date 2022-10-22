import Image from "next/image";
import styles from "./about.module.css";
import MyImg from "../../assets/images/profile.jpg";
import { SocialProfile } from "../Social Profile";

const About = () => {
  return (
    <div className={styles["about"]} id="about">
      <div className={styles["profile-flex"]}>
        <div className={styles["img-wrapper"]}>
          <Image src={MyImg} alt="My img" height="300px" width="300px" />
        </div>
        <div>
          <h1 className={styles["main-heading"]}>{"Hi! I'm Priyadharshan"}</h1>
          <p className={styles["description"]}>
            Web developer based in India, experienced in frontend tech Next js,
            React, CSR, SSR. Interested in talks about frontend, Mono Repos,
            CDNs.
          </p>
          <p className={styles["description"]}>
            I have worked in Spring boot, hibernate and Jax-rs for the backend
            and proficient in java. I also have a keen interest in competitive
            programming and web3.
          </p>
          <SocialProfile />
        </div>
      </div>
    </div>
  );
};

export default About;
