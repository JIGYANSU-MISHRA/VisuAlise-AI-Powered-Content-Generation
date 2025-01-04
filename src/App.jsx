import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

// Static Components
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Features from './Components/Features/Features';
import FAQ from './Components/FAQ/FAQ';
import Contact from './Components/Contact/contact';
import Footer from './Components/Footer/footer';

// Dynamic Pages
import TextToImage from './Pages/Text-Image/TextToImage.jsx';
import ImageToText from './Pages/Image-Text/ImageToText.jsx';
import TextToSpeech from './Pages/Text-Speech/TextToSpeech.jsx';
import SpeechToText from './Pages/Speech-Text/SpeechToText.jsx';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Main Page with Static Sections */}
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Features />
                <FAQ />
                <Contact />
                <Footer />
              </>
            }
          />

          {/* Dynamic Pages */}
          <Route path="/" exact component={Features} />
          <Route path="/text-to-image" element={<TextToImage />} />
          <Route path="/image-to-text" element={<ImageToText />} />
          <Route path="/text-to-speech" element={<TextToSpeech />} />
          <Route path="/speech-to-text" element={<SpeechToText />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
