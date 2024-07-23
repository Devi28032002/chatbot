import React from 'react'
import './hero.css'

const Hero = () => {
  return (
    <section id='home'>
    <div className='hero-container'>
     <div className='container1'>
      <h1 className='main-text'>Your Smartest Virtual assistant, Ready to Chat</h1>
      <h4 className='sub-text' >Available 24/7 to assist, engage and resolve your queries effortlessly </h4>
      <button className='try-button'>Try ChatBOT</button>
     </div>
     <div className='container2-img'>
     <img src="/chatbot2-img.png" alt="img" />
     </div>
    </div>
    </section>
  )
}

export default Hero
