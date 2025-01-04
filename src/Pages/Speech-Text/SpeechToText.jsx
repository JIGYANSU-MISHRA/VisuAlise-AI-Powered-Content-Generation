import React, { useState } from 'react';
import './SpeechToText.css';

const SpeechToText = () => {
  const [text, setText] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState(null);

  const handleStartListening = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert('Speech Recognition is not supported in your browser. Please use Chrome.');
      return;
    }

    const newRecognition = new window.webkitSpeechRecognition();
    newRecognition.lang = 'en-US';
    newRecognition.interimResults = true;
    newRecognition.continuous = false;

    newRecognition.onstart = () => {
      setIsListening(true);
      setText('Listening...');
    };

    newRecognition.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');
      setText(transcript);
    };

    newRecognition.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
      alert('Error occurred during recognition. Try again.');
    };

    newRecognition.onend = () => {
      setIsListening(false);
    };

    newRecognition.start();
    setRecognition(newRecognition);
  };

  const handleStopListening = () => {
    if (recognition) {
      recognition.stop();
      setIsListening(false);
    }
  };

  return (
    <div className="speech-to-text-container">
      <h1 className="title">Speech to Text Converter</h1>
      <p>Welcome to the Speech-to-Text Converter page, an innovative platform that effortlessly transforms your spoken words into written text using cutting-edge webkitSpeechRecognition technology. Simply speak into your device, and watch as your speech is converted into accurate, real-time text on the screen.</p>
      <button onClick={handleStartListening} disabled={isListening}>
        {isListening ? 'Listening...' : 'Start Listening'}
      </button>
      {isListening && (
        <button onClick={handleStopListening}>
          Stop Listening
        </button>
      )}
      <textarea
        value={text}
        readOnly
        placeholder="Your speech will appear here..."
        rows="6"
        cols="50"
      />
    </div>
  );
};

export default SpeechToText;
