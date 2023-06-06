import React, { useEffect } from "react";
import styles from "./Team.module.css";

import kyle from "../../assets/mock-joined-events.webp";
import brian from "../../assets/mock-search-events.webp";
import troy from "../../assets/mock-hosted-events.webp";

import AOS from "aos";
import "aos/dist/aos.css";

const Team = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div>
      <section id={styles.demo}>
        <div className={`${styles.container} ${styles.demo}`}>
          <div className={styles.demoContent}>
            <div
              className={`${styles.demoMiddle} ${styles.title}`}
              data-aos="fade-right"
            >
              <h1>Brian</h1>
              <img src={brian} alt="Brian" className={styles.images} />
              <h2>Data Engineer / Snowboarder</h2>
            </div>
            <div
              className={`${styles.demoLeft} ${styles.title}`}
              data-aos="fade-up"
            >
              <h1>Kyle</h1>
              <img src={kyle} alt="Kyle" className={styles.images} />
              <h2>Mobile App Developer / Skier</h2>
            </div>
            <div
              className={`${styles.demoRight} ${styles.title}`}
              data-aos="fade-left"
            >
              <h1>Troy</h1>
              <img src={troy} alt="Troy" className={styles.images} />
              <h2>Server Architect / Snowboarder</h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
