import React, { useEffect } from "react";
import styles from "./Features.module.css";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import skiNavMobileApp from "public/skinavphonepics.png";
import skiNavPipeline from "public/skinavcomputerpic.png";
import Image from 'next/image'

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
              <Image src={skiNavMobileApp} alt="Ski Slope Navigation" layout="responsive"/>
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
              <Image src={skiNavPipeline} alt="phone" layout="responsive"/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;