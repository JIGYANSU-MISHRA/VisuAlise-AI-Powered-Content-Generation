import React from 'react';
import './Features.css';
import { FaRobot, FaImage, FaMicrophone, FaRegFileAlt } from 'react-icons/fa'; // Icons
import { Link } from 'react-router-dom'; // Import Link for navigation

const Features = () => {
    return (
        <div className="feature">
            <section className="features">
                <h2>Our AI Features</h2>
                <div className="feature-cards">
                    <div className="feature-card">
                        <FaRobot size={50} color="#4CAF50" />
                        <h3>Text to AI Images</h3>
                        <p>Generate stunning images from any text prompt.</p>
                        <Link to="/text-to-image" className="feature-button">
                            Try It Now
                        </Link>
                    </div>
                    <div className="feature-card">
                        <FaImage size={50} color="#2196F3" />
                        <h3>Image to Text</h3>
                        <p>Extract text and data from your images easily.</p>
                        <button className="feature-button">Try It Now</button>
                    </div>
                    <div className="feature-card">
                        <FaMicrophone size={50} color="#FF9800" />
                        <h3>Text to Speech</h3>
                        <p>Convert text into human-like speech instantly.</p>
                        <button className="feature-button">Try It Now</button>
                    </div>
                    <div className="feature-card">
                        <FaRegFileAlt size={50} color="#9C27B0" />
                        <h3>Speech to Text</h3>
                        <p>Transcribe your speech to accurate text.</p>
                        <button className="feature-button">Try It Now</button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Features;
