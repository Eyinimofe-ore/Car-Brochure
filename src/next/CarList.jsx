import React from "react";
import { Link } from "react-router-dom";
import { cars } from "./cars";

function CarList() {
  return (
    <div style={styles.pageContainer}>
      {/* Back Arrow */}
      <Link to="/" style={styles.backButton}>
        <span style={styles.arrow}>&larr;</span>{" "}
        {/* Back arrow without background */}
      </Link>

      {/* Title Section */}
      <h1 className="primaryText" style={styles.pageTitle}>
        Car Listings
      </h1>

      <div style={styles.listContainer}>
        {cars.map((car, index) => (
          <Link to={`/cars/${car.name}`} key={index} style={styles.cardLink}>
            <div style={styles.card}>
              <img src={car.image} alt={car.name} style={styles.image} />
              <span style={styles.price}>
                <span style={{ color: "orange" }}>$</span>
                {car.price}
              </span>
              <span className="primaryText" style={styles.name}>
                {car.name}{" "}
              </span>
              <p className="secondaryText" style={styles.detail}>
                {car.detail}
              </p>
              <span style={styles.clickText}>Click for Details</span>{" "}
              {/* Clickable text */}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

const styles = {
  pageContainer: {
    position: "relative", // To ensure the back arrow is positioned correctly at the top
  },
  backButton: {
    position: "absolute", // Positions the back button at the top
    top: "10px", // Distance from the top of the page
    left: "20px", // Distance from the left
    padding: "10px 15px",
    textDecoration: "none",
    fontSize: "20px",
    display: "flex",
    alignItems: "center",
  },
  arrow: {
    fontSize: "24px",
    color: "#007BFF", // Blue arrow color
  },
  pageTitle: {
    textAlign: "center",

    marginTop: "50px", // Space after the back arrow
  },
  listContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
    padding: "20px",
  },
  cardLink: {
    textDecoration: "none",
    color: "inherit",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between", // Ensures that content is spaced evenly
    gap: "0.6rem",
    padding: "1rem",
    borderRadius: "10px",
    width: "200px",
    height: "400px", // Fixed height for uniformity
    transition: "all 300ms ease-in",
    background:
      "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(136, 160, 255, 0.503) 217.91%)",
    boxShadow: "0px 72px 49px -51px rgba(136, 160, 255, 0.21)",
  },
  image: {
    width: "100%",
    maxWidth: "15rem",
    borderRadius: "8px",
  },
  price: {
    fontSize: "1.2rem",
    fontWeight: 400,
    color: "#333",
  },
  name: {
    fontSize: "1.5rem",
    fontWeight: 600,
    textAlign: "center",
  },
  detail: {
    fontSize: "0.9rem",
    textAlign: "center",
    color: "#555",
    maxWidth: "15rem",
  },
  clickText: {
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#007bff",
    textDecoration: "underline",
    marginTop: "auto", // Pushes this text to the bottom
    cursor: "pointer", // Shows a pointer cursor to indicate it's clickable
  },
};

export default CarList;
