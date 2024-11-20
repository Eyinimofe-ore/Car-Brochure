import React from "react";
import "./GetStarted.css";

const GetStarted = () => {
  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get Started with OmitAuto</span>
          <span className="secondaryText">Signup to get the latest deals and<br/> find your dream car</span>
          <button className="button">
            <a href="mailto:eyinimofeolatubosun@gmail.com"> Get Started</a>
          </button>
          
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
