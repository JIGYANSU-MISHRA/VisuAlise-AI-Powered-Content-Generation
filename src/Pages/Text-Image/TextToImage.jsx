import React, { useState, useEffect } from 'react'; // React library and hooks
import axios from 'axios'; // Axios for HTTP requests
import './TextToImage.css'; // Import the CSS file for styling

const TextToImageGenerator = () => {
  const [text, setText] = useState(''); // Input text state
  const [images, setImages] = useState([]); // Generated images state
  const [loading, setLoading] = useState(false); // Loading state
  const [currentIndex, setCurrentIndex] = useState(0); // Index tracking state
  const [buttonText, setButtonText] = useState('Random Image Generate'); // Button text state
  const [error, setError] = useState(''); // Error message state

  // Update button text dynamically
  useEffect(() => {
    setButtonText(text ? 'Generate Image' : 'Random Image Generate');
  }, [text]);

  // Function to generate images from the API
  const generateImage = async () => {
    setLoading(true); // Start loading
    setError(''); // Clear any previous errors

    const options = {
      method: 'POST',
      url: 'https://ai-image-generator3.p.rapidapi.com/generate',
      headers: {
        'x-rapidapi-key': '57630eb2e9msh0fd6988580150d8p11329djsn06950a67782b',
        'x-rapidapi-host': 'ai-image-generator3.p.rapidapi.com',
        'Content-Type': 'application/json',
      },
      data: {
        prompt: text || 'random', // Default to 'random' if no text
        page: 1,
      },
    };

    try {
      const response = await axios.request(options);
      setImages(response.data.results.images || []); // Update images
      setCurrentIndex(0); // Reset index
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          // Server responded with a status code out of the 2xx range
          setError(`Error: ${error.response.status} - ${error.response.data?.message || 'Something went wrong!'}`);
        } else if (error.request) {
          // No response received
          setError('No response from the server. Please check your network connection.');
        } else {
          // Error setting up the request
          setError(`Request Error: ${error.message}`);
        }
      } else {
        // Non-Axios errors
        setError('An unexpected error occurred. Please try again.');
      }
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // Function to load more images
  const loadMoreImages = () => {
    setCurrentIndex(currentIndex + 4);
  };

  return (
    <div className="container">
      <h1 className="title">Text to Image Generator</h1>
      <div className="content">
        <textarea
          className="text-input"
          rows="3"
          placeholder="Enter text to generate your image..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <button
          className={`generate-button ${loading ? 'loading' : ''}`}
          onClick={generateImage}
          disabled={loading}
        >
          {loading ? 'Generating...' : buttonText}
        </button>
        {error && <p className="error-message">{error}</p>} {/* Display error message */}
        <div className="images-grid">
          {images.slice(0, currentIndex + 4).map((image, index) => (
            <img key={index} src={image} alt={`Generated ${index}`} className="generated-image" />
          ))}
        </div>
        {currentIndex + 4 < images.length && (
          <button className="load-more-button" onClick={loadMoreImages}>
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default TextToImageGenerator;
