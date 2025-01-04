// src/Home.jsx
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="landing-page">
      
      {/* Hero Section */}
      <section className="hero" id="heros">
      <h1>Visu<span class="highlight">AI</span>ize: AI-Powered Content Generation      </h1>
      <p>Empowering creativity with AI. Transform text, images, and speech seamlessly.</p>
        <button className="cta-button">Get Started</button>
      </section>
    </div>
  );
};

export default Home;
