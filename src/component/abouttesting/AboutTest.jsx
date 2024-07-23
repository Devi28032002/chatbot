import React from 'react'
import './abouttest.css'


const AboutTest = () => {
  return (
   
    <section id='about'>

       <div className='about-container1'>
        <div className='aboutText-container'>
            <h1>About Our ChatBOT</h1>
            <hr className="heading-hr" />
            <h5>Start saving time and streamline your interactions with the ChatBOT Web UI Kit – the ultimate 
                tool for creating efficient and user-friendly chat experiences.</h5>
        </div>

        <div className='box-containers'>
            <div className='box-container'>
            <div className="multilingual-support">
            <i className="fas fa-globe icon-large"></i>
            </div>
            <div className='text-container2'>
                <h2>Multilingual Support</h2>
                <h5>Communicate in your preferred language with our multilingual capabilities</h5>
            </div>
            </div>

            <div className='box-container'>
            <div className='multilingual-support'>
            <i className="fas fa-lock icon-large"></i>
            </div>
            <div className='text-container2'>
                <h2>Security and Privacy</h2>
                <h5>With the highest security and privacy standards, protecting your data at all times.</h5>
            </div>
            </div>

            <div className='box-container'>
            <div className='multilingual-support'>
            <i className="fas fa-comments icon-large"></i>
            </div>
            <div className='text-container2'>
                <h2>Natural Language Processing</h2>
                <h5>Our chatbot understands and processes human language.</h5>
            </div>
            </div>
        </div>
       </div>
    </section>
  )
}

export default AboutTest
