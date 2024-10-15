import React from 'react';
import './About.css';
import image from './AboutBackground.jpg';  // Replace with the correct path to your image
import Nav_Bar from './Nav_Bar';
import Footer from './Footer';

export default function About() {
  return (
    <div>
      <Nav_Bar />
      <div className="about-swachhata">
        <div className="about-text">
          <h1>About Swachhata</h1>
          <p>The Swachhata application is a fourth generation complaint redressal mobile and web platform. It is a quantum leap in how complaints and grievances are being redressed by Municipal Corporations in India. This solution is for all the 4041 towns and cities of India.</p>
          <p>The Swachhata application fuses together a time-tested complaint redressal platform with the opportunity for citizens to work together on civic issues with community centric features for citizens to vote up on complaints, share them with other concerned citizens and comment on the work being done.</p>
        </div>
        <div className="about-image">
          <img src={image} alt="Swachhata Campaign" />
          <div className="image-overlay">
            <p>The campaign was officially launched on October 2, 2014 at Rajghat, New Delhi, where Prime Minister Narendra Modi himself cleaned the road. It was performed in remembrance of Mahatma Gandhi, the father of the nation. It was India's biggest ever cleanliness drive and saw the participation of 3 million government employees, school and college students.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
