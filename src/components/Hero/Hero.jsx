import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div>
      <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container ">
          <div className=" flexColStart hero-left">
            <div className="hero-title">
              <div className="orange-circle" />
              <motion.h1 initial={{y:"2rem",opacity:0}}
              animate={{y:0,opacity:1}}
              transition={{duration:2,type:"spring"}}>
                Discover <br /> Your Dream <br /> Car
              </motion.h1>
            </div>
            <div className=" flexColStart secondaryText hero-des">
              <span>Find a variety of cars that suit you very easily</span>
              <span>Forget all difficuties in finding a car for you</span>
            </div>
            <div className=" flexCenter search-bar">
              <HiLocationMarker color="var(--blue)" size={25} />
              <input type="text" />
              <button className="button">Search</button>
            </div>
            <div className="flexcenter stats">
              <div className="flexColCenter stat">
                <span>
                  <CountUp start={8800} end={9000} duration={4} />
                  <span>+</span>
                </span>
                <span className="secondaryText" id="t">Products</span>
              </div>
              <div className="flexColCenter stat">
                <span>
                  <CountUp start={1950} end={2000} duration={4} />
                  <span>+</span>
                </span>
                <span className="secondaryText" id="t">Customers</span>
              </div>

              <div className="flexColCenter stat">
                <span>
                  <CountUp end={28} />
                  <span>+</span>
                </span>
                <span className="secondaryText" id="t">Award Winning</span>
              </div>
            </div>
          </div>
          {/*right side */}
          <div className=" flexCenter hero-right">
            <motion.div initial={{x:"7rem",opacity:0}} animate={{x:"0",opacity:1}} transition={{duration:2,type:"spring"}} className="image-container">
              <img src="./car2.png" alt="" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
