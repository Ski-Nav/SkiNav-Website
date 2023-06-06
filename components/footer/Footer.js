import React from "react";
import styles from "./Footer.module.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <section id={styles.footer}>
        {/* <div className={`${styles.container} ${styles.footer}`}>
          <div className={styles.footerBox}>
            <h4>Contact Us</h4>
            <div className={`${styles.footerContact} ${styles.uTextSmall}`}>
              <div>
                <FaMapMarkerAlt /> &nbsp; UCSD & UIUC
              </div>
              <div>
                <FaEnvelope /> &nbsp;
                <a href="mailto:momenteventsapp@gmail.com">
                  &nbsp; momenteventsapp@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className={styles.footerBox}>
            <p className={styles.uTextSmall}> </p>
          </div>
        </div> */}
      </section>
    </div>
  );
};

export default Footer;