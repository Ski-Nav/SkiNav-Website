import React, { useState, useEffect } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import { SiGotomeeting } from "react-icons/si";
import Button from "../UI/Button/Button";
import logo from "../../assets/momentlogo.webp";
import discord from "../../assets/discordicon.svg";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth); // Access window.innerWidth in the mounting phase

    // Update the width on window resize
    const handleWindowSizeChange = () => {
      setWidth(window.innerWidth);
    };

    // Attach event listener for window resize
    window.addEventListener("resize", handleWindowSizeChange);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.logo}>
          <div className={styles.logoContainer}>
            <h1>
              <span className={styles.logoSki}>Ski</span>
              <span className={styles.logoNav}>Nav</span>
            </h1>
          </div>
        </div>
        {/* <div className={styles.navbarToggle} id="mobile-menu">
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
        <ul className={styles.navbarMenu}>
          {isMobile ? (
            <li className={styles.navbarBtn}>
              <a
                href="https://momentevents.app/discord"
                target="_blank"
                className={styles.button}
                id="temp-page"
              >
                <img
                  src={discord}
                  className={styles.discordIconMobile}
                  alt="discord"
                />
              </a>
            </li>
          ) : (
            <li className={styles.navbarBtn}>
              <a
                href="https://momentevents.app/discord"
                target="_blank"
                className={styles.button}
                id="temp-page"
              >
                <img
                  src={discord}
                  className={styles.discordIcon}
                  alt="discord"
                />
                Join our Discord!
              </a>
            </li>
          )}
        </ul> */}
      </div>
    </nav>
  );
};

export default Navbar;
