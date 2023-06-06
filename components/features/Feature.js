import React from "react";
import styles from "./Feature.module.css";
import { FaAccessibleIcon } from "react-icons/fa";
import { BsHexagon } from "react-icons/bs";

const Feature = ({ icon, heading, text }) => {
  return (
    <div>
    <div className={styles.feature}>
      <div className={styles.featureIcon}>
        <BsHexagon color="#FFFFFF" size={55} />
        <div className={styles.innerIcon}>{icon}</div>
      </div>

      <div className={styles.featureText}>
        <h3>{heading}</h3>
        <h4>{text}</h4>
      </div>
    </div>
    </div>
  );
};

export default Feature;
