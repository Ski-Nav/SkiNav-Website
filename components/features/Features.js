import React, { useEffect } from "react";
import styles from "./Features.module.css";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import viewEvents from "../../assets/mock-home-event-details.webp";
import createEvents from "../../assets/mock-create-event.webp";

import Feature from "./Feature";
import { FeatureListTop, FeatureListBot } from "./data";

import AOS from "aos";
import "aos/dist/aos.css";

const Features = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className={styles.featuresBackground}>
      <section>
        <div className={`${styles.container} ${styles.features}`}>
          <div className={styles.featuresContent}>
            <div className={styles.featuresLeft1} data-aos="fade-right">
              <img src={viewEvents} alt="View Events" />
            </div>
            <div className={styles.featuresRight1} data-aos="fade-left">
              {FeatureListTop.map((feature) => (
                <Feature
                  key={feature.id}
                  icon={feature.icon}
                  heading={feature.heading}
                  text={feature.text}
                />
              ))}
            </div>
          </div>
        </div>
        <div className={`${styles.container} ${styles.features}`}>
          <div className={styles.featuresContent}>
            <div className={styles.featuresLeft2} data-aos="fade-right">
              {FeatureListBot.map((feature) => (
                <Feature
                  key={feature.id}
                  icon={feature.icon}
                  heading={feature.heading}
                  text={feature.text}
                />
              ))}
            </div>
            <div className={styles.featuresRight2} data-aos="fade-left">
              <img src={createEvents} alt="phone" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;