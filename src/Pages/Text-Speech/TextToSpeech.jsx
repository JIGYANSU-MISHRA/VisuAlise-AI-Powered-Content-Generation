import React, { useState } from 'react';
import './TextToSpeech.css';

const TextToSpeech = () => {
  const [text, setText] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleSpeak = () => {
    if (!text.trim()) return;

    const speech = new SpeechSynthesisUtterance(text);
    speech.onstart = () => setIsSpeaking(true);
    speech.onend = () => setIsSpeaking(false);
    speech.lang = 'en-US'; // Set the language (you can customize this)

    window.speechSynthesis.speak(speech);
  };

  const handleStop = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  return (
    <div className="text-to-speech-container">
      <h1 className="title">Text to Speech Converter</h1>
      <p>Discover the convenience of our Text-to-Speech Converter, a user-friendly web application powered by the SpeechSynthesisUtterance API. Transform written text into clear, natural-sounding speech effortlessly. Simply input your text, and our tool will vocalize it, providing an accessible and efficient way to interact with textual content.</p>
      <textarea
        placeholder="Enter text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows="6"
        cols="50"
      />
      <div className="buttons">
        <button onClick={handleSpeak} disabled={isSpeaking}>
          {isSpeaking ? 'Speaking...' : 'Speak'}
        </button>
        <button onClick={handleStop} disabled={!isSpeaking}>
          Stop
        </button>
      </div>
    </div>
  );
};

export default TextToSpeech;
