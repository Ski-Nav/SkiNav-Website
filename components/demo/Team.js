import React, { useEffect } from "react";
import styles from "./Team.module.css";

import kyle from "public/kyle.png";
import brian from "public/brian.png";
import troy from "public/troy.png";
import Image from "next/image";

import AOS from "aos";
import "aos/dist/aos.css";

const Team = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const width = 400;
  const height = 400;

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
              <Image src={brian} alt="brian" layout="responsive" className={styles.images}/>
              <h2>Data Engineer / Snowboarder</h2>
            </div>
            <div
              className={`${styles.demoLeft} ${styles.title}`}
              data-aos="fade-up"
            >
              <h1>Kyle</h1>
              <Image src={kyle} alt="kyle" layout="responsive" className={styles.images}/>

              <h2>Mobile App Developer / Skier</h2>
            </div>
            <div
              className={`${styles.demoRight} ${styles.title}`}
              data-aos="fade-left"
            >
              <h1>Troy</h1>
              <Image src={troy} alt="troy" layout="responsive" className={styles.images}/>
              <h2>Server Architect / Snowboarder</h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
