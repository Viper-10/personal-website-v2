import { useEffect, useRef } from "react";
import styles from "./style.module.css";
import { navigationItems } from "../navigationItems";

const DesktopView = () => {
  const navbarRef = useRef();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      if (navbarRef && navbarRef.current) {
        if (window.scrollY < 36) {
          navbarRef.current.style.backgroundColor = "rgba(0,0,0,0.4)";
        } else {
          navbarRef.current.style.backgroundColor = "rgba(0,0,0,0.875)";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className={styles["navbar"]} ref={navbarRef}>
      <div className={styles["navbar-container"]}>
        <div className={styles["logo"]} onClick={() => window?.scrollTo(0, 0)}>
          PRIYADHARSHAN R
        </div>
        <ul className={styles["nav-items"]}>
          {navigationItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className={styles["nav-item"] + " " + styles.link}
            >
              {item.name}
            </a>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default DesktopView;
