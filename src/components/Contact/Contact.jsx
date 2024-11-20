import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const Contact = () => {
  return (
    <div>
      <section className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">
          {/*left side */}
          <div className="flexColStart c-left">
            <span className="orangeText">Our Contact</span>
            <span className="primaryText">Easy to Contact us</span>
            <span className="secondaryText">
              We are always here to provide the best customer service for you
            </span>

            <div className="flexColStart contactModes">
              {/*first row */}
              <div className="flexStart row">
                <div className="flexColStart mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <MdCall size={25} />
                    </div>
                    <div className="flexColStart detail">
                      <span className="primaryText">Call</span>
                      <span className="seconaryText">080 234 555 77</span>
                    </div>
                  </div>
                  <div className="flexCenter button">Call Now</div>

                </div>
                {/*second mode */}
                <div className="flexColStart mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <BsFillChatDotsFill size={25} />
                    </div>
                    <div className="flexColStart detail">
                      <span className="primaryText">chat</span>
                      <span className="seconaryText">080 234 555 77</span>
                    </div>
                  </div>
                  <div className="flexCenter button">Chat Now</div>

                </div>
              </div>
              {/*second row */}
              <div className="flexStart row">
                <div className="flexColStart mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <BsFillChatDotsFill size={25} />
                    </div>
                    <div className="flexColStart detail">
                      <span className="primaryText">Email</span>
                      <span className="seconaryText">cars@gmail.com</span>
                    </div>
                  </div>
                  <div className="flexCenter button"><a href="mailto:eyinimofeolatubosun@gmail.com">Send An Email</a></div>

                </div>
                {/*fourt mode */}
                <div className="flexColStart mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <HiChatBubbleBottomCenter size={25} />
                    </div>
                    <div className="flexColStart detail">
                      <span className="primaryText">Message</span>
                      <span className="seconaryText">080 234 555 77</span>
                    </div>
                  </div>
                  <div className="flexCenter button">Message Now</div>

                </div>
              </div>
            </div>
          </div>
          {/*right side */}
          <div className="c-right">
            <div className="image-container">
              <img src="/car6.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
