import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { cars } from './cars';

function CarDetail() {
  const { name } = useParams(); // Get the name parameter from the URL
  const car = cars.find((car) => car.name === name); // Find the car by name

  if (!car) {
    return <div>Car not found</div>; // Display message if car is not found
  }

  const handleCall = () => {
    window.location.href = `tel:08088750140`; // Replace with the actual phone number
  };

  const handleWhatsApp = () => {
    window.location.href = `https://wa.me/+2348088750140`; // Replace with the actual WhatsApp number
  };

  return (
    <div style={styles.container}>
      <Link to="/cars" style={styles.backButton}>Back to Car List</Link>
      <h1 style={styles.carName}>{car.name}</h1>
      <img src={car.image} alt={car.name} style={styles.image} />
      <p style={styles.detail}>{car.detail}</p>

      {/* Features Section */}
      <div style={styles.featuresContainer}>
        <h3 style={styles.featuresTitle}>Features:</h3>
        <ul style={styles.featureList}>
          {car.features.map((feature, index) => (
            <li key={index} style={styles.featureItem}>{feature}</li>
          ))}
        </ul>
      </div>

      {/* Detailed Specifications Section */}
      <div style={styles.details}>
        <p><strong>Engine:</strong> {car.engine}</p>
        <p><strong>Horsepower:</strong> {car.horsepower}</p>
        <p><strong>Fuel Economy:</strong> {car.fuelEconomy}</p>
        <p><strong>Transmission:</strong> {car.transmission}</p>
        <p><strong>Seating Capacity:</strong> {car.seatingCapacity}</p>
      </div>

      {/* Call and WhatsApp Buttons */}
      <div style={styles.buttonContainer}>
        <button onClick={handleCall} style={styles.callButton}>Call</button>
        <button onClick={handleWhatsApp} style={styles.whatsappButton}>WhatsApp</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '800px',
    margin: 'auto',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  backButton: {
    display: 'inline-block',
    marginBottom: '20px',
    padding: '10px 15px',
    backgroundColor: '#007BFF',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
    fontSize: '16px',
  },
  carName: {
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '10px',
  },
  image: {
    width: '100%',
    maxWidth: '500px',
    borderRadius: '8px',
    display: 'block',
    margin: '0 auto',
  },
  detail: {
    fontSize: '16px',
    color: '#555',
    marginBottom: '20px',
    textAlign: 'center',
  },
  featuresContainer: {
    marginTop: '20px',
  },
  featuresTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
  featureList: {
    padding: '0',
    listStyleType: 'none',
  },
  featureItem: {
    backgroundColor: '#e0f7fa',
    padding: '8px',
    marginBottom: '5px',
    borderRadius: '5px',
  },
  details: {
    marginTop: '20px',
    fontSize: '16px',
    lineHeight: '1.6',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    marginTop: '30px',
  },
  callButton: {
    padding: '12px 20px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    width: '45%',
  },
  whatsappButton: {
    padding: '12px 20px',
    backgroundColor: '#25D366',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    width: '45%',
  },
};

export default CarDetail;
