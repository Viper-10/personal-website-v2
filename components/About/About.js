import Image from "next/image";
import styles from "./about.module.css";
import MyImg from "../../assets/images/profile-2.jpg";
import { SocialProfile } from "../Social Profile";

const About = () => {
  return (
    <div className={styles["about"]} id="about">
      <div className={styles["profile-flex"]}>
        <div className={styles["img-wrapper"]}>
          <Image
            src={MyImg}
            alt="Priyadharshan Ravichandran image"
            height="350px"
            width="350px"
          />
        </div>
        <div>
          <p className={styles["description"]}>
            Web developer based in India, experienced in frontend tech Next js,
            React, CSR, SSR. Interested in talks about frontend, Mono Repos and
            System Design. I am a Member of Technical Staff (MTS) in DevRev,
            specializing in frontend development. with a focus on creating
            seamless and captivating user interfaces and functional web
            experiences.
          </p>
          <p className={styles["description"]}>
            I have worked in Spring boot, hibernate and Jax-rs for the backend
            and {"I'm"} proficient in java. I also have a keen interest in
            competitive programming and web3.
          </p>
          <SocialProfile />
        </div>
      </div>
    </div>
  );
};

export default About;
