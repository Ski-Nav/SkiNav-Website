import React, { useEffect } from "react";
import styles from "./Team.module.css";

import joinedEvents from "../../assets/mock-joined-events.webp";
import searchEvents from "../../assets/mock-search-events.webp";
import hostedEvents from "../../assets/mock-hosted-events.webp";

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
            <div className={`${styles.demoLeft} ${styles.title}`} data-aos="fade-right">
              <h1>Calendar</h1>
              <img src={joinedEvents} alt="Calendar" className={styles.images} />
              <h2>Keep track of your planned events.</h2>
            </div>
            <div className={`${styles.demoMiddle} ${styles.title}`} data-aos="fade-up">
              <h1>Explore</h1>
              <img src={searchEvents} alt="Search" className={styles.images} />
              <h2>
                Explore any upcoming event based on its title, description, location, and more.
              </h2>
            </div>
            <div className={`${styles.demoRight} ${styles.title}`} data-aos="fade-left">
              <h1>Host</h1>
              <img src={hostedEvents} alt="Tags" className={styles.images} />
              <h2>Manage your hosted events and guest lists.</h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;