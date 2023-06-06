import React, { useEffect } from "react";
import styles from "./Header.module.css";

import iosdownload from "../../assets/iosdownload.webp";
import androiddownload from "../../assets/androiddownload.webp";

import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section id={styles.header}>
      <div className={`${styles.container} ${styles.header}`}>
        <div className={styles.aligningContentsCenter}>
          <div className={styles.headerLeft} data-aos="fade-right">
            <h1>
              <span className={styles.mainText}>
                Imagine Google Maps for Ski Resorts
              </span>
            </h1>

            <div className={styles.releaseText}>A ski slope navigator with accurate weather statistics, ski lift wait times, route recommendations, and much more</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;