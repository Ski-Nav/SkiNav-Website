import React, { useEffect } from "react";
import styles from "./Header.module.css";

import AnimatedArrow from "../AnimatedArrow/AnimatedArrow";
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
                We make finding events easy
              </span>
              <span className={styles.subtitleText}>
                By students. For students.
              </span>
            </h1>

            <div className={styles.releaseText}>Download the app now!</div>
            <div className={styles.headerCta}>
              <div className={styles.headerDownloadButtons}>
                <a
                  href="https://momentevents.app/ios"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={iosdownload}
                    alt="iOS Download"
                    width="200"
                    className={styles.headerDownloadButton}
                  />
                </a>
              </div>
              <div className={styles.headerDownloadButtons}>
                <a
                  href="https://momentevents.app/android"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={androiddownload}
                    alt="Android Download"
                    width="200"
                    className={styles.headerDownloadButton}
                  />
                </a>
              </div>
            </div>
          </div>

          <div className={styles.headerArrow}>
            <AnimatedArrow />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;