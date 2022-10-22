import { useState, useRef, useEffect } from "react";
import { navigationItems } from "../navigationItems";
import styles from "./style.module.css";

const MobileView = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();
  const mobileBarIconRef = useRef();
  const navbarRef = useRef();

  const dropdownClass = isOpen
    ? styles["dropdown"] + " " + styles["open"]
    : styles["dropdown"];

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("click", handleOutsideClick);

    function handleOutsideClick(e) {
      if (mobileBarIconRef.current.contains(e.target)) {
        return;
      }
      if (dropdownRef.current.contains(e.target)) {
        setIsOpen(true);
        return;
      }
      setIsOpen(false);
    }

    function handleScroll() {
      if (window.scrollY < 36) {
        navbarRef.current.style.backgroundColor = "rgba(0,0,0,0.4)";
      } else {
        navbarRef.current.style.backgroundColor = "rgba(0,0,0,0.875)";
      }
    }

    return () => {
      window?.removeEventListener("scroll", handleScroll);
      window?.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles["navbar"]} ref={navbarRef}>
      <div
        className={
          styles["flex-between"] + " " + styles["mobile-nav-container"]
        }
      >
        <div className={styles["logo"]} onClick={() => window?.scrollTo(0, 0)}>
          PRIYADHARSHAN
        </div>
        <div className={styles["mobilebaricon"]}>
          <i
            id="hamburger-icon"
            className="fa fa-bars"
            onClick={toggleDropdown}
            ref={mobileBarIconRef}
          />

          <div ref={dropdownRef} className={dropdownClass}>
            <ul>
              {navigationItems.map((item) => (
                <a
                  href={item.link}
                  key={item.name}
                  className={styles["mobile-nav-link"]}
                >
                  {item.name}
                </a>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MobileView;
