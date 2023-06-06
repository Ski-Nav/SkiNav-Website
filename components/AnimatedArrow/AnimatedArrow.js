import React, { useRef, useEffect } from "react";
import "./AnimatedArrow.module.css";
import { FaArrowDown } from "react-icons/fa";

import { Animated, Easing } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AnimatedArrow = () => {
  return (
    <div className="container">
      <FaArrowDown className="Animated-Arrow" size={50}></FaArrowDown>
    </div>
  );
};

export default AnimatedArrow;
