import React, { useState } from 'react'
import './FAQ.css'
const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const togglePanel = (index) =>{
        setActiveIndex(activeIndex ===index ? null : index);

    };
  return (
    <section id='FAQ'>
    <div className='faq-page'>
      <h1>Frequently Asked Questions</h1>
      <hr className="faq-heading-hr" />
      <div className='FAQ-container'>
        <div className='FAQ-image'>
        <img src='/FAQs-img.png'  className='FAQ-img'/>
        </div>
        <div className='FAQ-text'>
        <button className="accordion" onClick={() => togglePanel(0)}>What is an AI ?</button>
      <div className={`panel ${activeIndex === 0 ? 'active' : ''}`}>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>

      <button className="accordion" onClick={() => togglePanel(1)}>Where all the ChatBOT can be used ?</button>
      <div className={`panel ${activeIndex === 1 ? 'active' : ''}`}>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>

      <button className="accordion" onClick={() => togglePanel(2)}>How does ChatBOT works ?</button>
      <div className={`panel ${activeIndex === 2 ? 'active' : ''}`}>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>

      <button className="accordion" onClick={() => togglePanel(3)}>why our ChatBOT is good ?</button>
      <div className={`panel ${activeIndex === 3 ? 'active' : ''}`}>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>

        </div>
      </div>
    </div>
    </section>
  )
}

export default FAQ
