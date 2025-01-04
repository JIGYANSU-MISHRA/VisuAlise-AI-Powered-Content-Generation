import React from 'react';
import './FAQ.css';

const FAQ = () => {
    return(
        <div className="faqs">
        <section className="faq" id="faq_s">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3>What is VisuAlize?</h3>
          <p>VisuAlize is an AI-powered platform that helps users generate and convert text, images, and speech seamlessly. We provide tools like Text-to-Image, Image-to-Text, Text-to-Speech, and Speech-to-Text.</p>
        </div>
        <div className="faq-item">
          <h3>How do I use the AI features?</h3>
          <p>Simply select the feature you'd like to use, enter the required input, and the AI will process and return the result within moments. Each feature is designed to be user-friendly and intuitive.</p>
        </div>
        <div className="faq-item">
          <h3>Is there a subscription fee?</h3>
          <p>VisuAlize is completely free. There are no subscription fees or hidden costs. You can access and use tools without any restrictions. Enjoy full functionality and take advantage of our cutting-edge AI technology for free!</p>
        </div>
        <div className="faq-item">
          <h3>Can I contact support?</h3>
          <p>Yes, you can reach out to our support team through the Contact Us section. We're always happy to assist with any inquiries or issues you may have.</p>
        </div>
      </section>
      </div>
)
}

export default FAQ;