import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/*left side */}
        <div className="flexColStart f-left">
          <img src="logo.png" alt="" width={120} />
          <span className="secondaryText">
            our vision is to provide
            <br /> the best car for you
          </span>
        </div>
        {/*right side */}
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">1, Tokunyo street, off Das close,Lagos</span>
          <div className="flexCenter f-menu">
            <span>Cars</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
