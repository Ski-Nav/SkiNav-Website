import React, { useEffect } from "react";
import "./Demo.css";

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
      <section id="demo">
        <div className="container demo">
          
          <div className="demo-content">
            <div className="demo-left" data-aos="fade-right">
                <h1>Calendar</h1>
              <img src={joinedEvents} alt="Calendar" />
              <h2>Keep track of your planned events.</h2>
            </div>
            <div className="demo-middle" data-aos="fade-up">
                <h1>Explore</h1>
                <img src={searchEvents} alt="Search" />
                <h2>Explore any upcoming event based on its title, description, location, and more.</h2>
            </div>
            <div className="demo-right" data-aos="fade-left">
                <h1>Host</h1>
                <img src={hostedEvents} alt="Tags" />
                <h2>Manage your hosted events and guest lists.</h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;

