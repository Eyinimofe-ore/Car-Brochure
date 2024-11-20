import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Cars.css';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import { cars } from '../../next/cars'; // Import the cars array
import { sliderSettings } from '../../utils/common';

const Cars = () => {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Cars</span>
        </div>
        <Swiper {...sliderSettings}>
          <SliderButtons />
          {cars.map((car, i) => (
            <SwiperSlide key={i}>
              <Link to={`/cars/${car.name}`} style={{ textDecoration: 'none' }}> {/* Link to CarDetail with car.name */}
                <div className="flexColStart r-card">
                  <img src={car.image} alt={car.name} />
                  <span className="secondaryText r-price">
                    <span style={{ color: 'orange' }}>$</span>
                    <span>{car.price}</span>
                  </span>
                  <span className="primaryText">{car.name}</span>
                  <span className="secondaryText">{car.detail}</span>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Cars;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
