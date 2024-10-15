import React from 'react';
import './LandingPage.css';
import backgroundImage from './Backgorundorig.jpeg'; // Make sure to add your background image here
import Nav_Bar from './Nav_Bar';
import Footer from './Footer';
const App = () => {
  return (
    <>
    <Nav_Bar/>
    <div className="container" style={{ backgroundImage: `url(${backgroundImage})` ,width:1500}}>
      <div className="header">
        <h1 className="title">Welcome to the Make It Clean (MIC) Platform</h1>
        <p className="subtitle">
        Swachh Bharat Mission's initiative aims to enhance cleanliness and hygiene across cities and communities nationwide. Join us in our efforts to create a cleaner, healthier, and more sustainable India for everyone.
        </p>
        <div className="buttons">
          <button className="button">Know More</button>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default App;
