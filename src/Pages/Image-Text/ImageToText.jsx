import React, { useState } from 'react';
import Tesseract from 'tesseract.js';
import './ImageToText.css';

const ImageToText = () => {
  const [image, setImage] = useState(null);
  const [text, setText] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleImageChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  const handleConvert = () => {
    if (image) {
      setIsProcessing(true);
      Tesseract.recognize(
        image,
        'eng', // Language of the text in the image
        {
          logger: (m) => console.log(m),
        }
      )
        .then(({ data: { text } }) => {
          setText(text);
          setIsProcessing(false);
        })
        .catch((error) => {
          console.error('Error: ', error);
          setIsProcessing(false);
        });
    }
  };

  return (
    <div className="image-to-text-container">
      <h1 className="title">Image To Text Generator</h1>
      <p>Welcome to the Image-to-Text Converter, an easy-to-use web application that leverages the power of Tesseract.js for Optical Character Recognition (OCR). Simply upload your image, and the tool will quickly extract the text within the image, providing you with a clear and accurate transcription.Try it now and make your images more accessible and useful!</p>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={handleConvert} disabled={isProcessing}>
        {isProcessing ? 'Processing...' : 'Convert'}
      </button>
      {image && <img src={image} alt="Uploaded" className="image-preview" />}
      {text && (
        <div className="output">
          <h2>Extracted Text:</h2>
          <p>{text}</p>
        </div>
      )}
    </div>
  );
};

export default ImageToText;
