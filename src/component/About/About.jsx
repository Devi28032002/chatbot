import React from 'react';
import './about.css';

const About = () => {
  return (
    
    <div className='container my-5'>
      
      <div className='about-container'>
        <div className='heading-cont text-center'>
          <h1>About our ChatBOT</h1>
          <h5>
            Start saving time and streamline your interactions with the ChatBOT Web UI Kit – the ultimate
            tool for creating efficient and user-friendly chat experiences.
          </h5>
        </div>
        <div className='row'>
          <div className='col-md-4 col-sm-12 mb-4'>
            <div className='box-container p-3 shadow-sm'>
              <div className='icon-sec'>
                {/* Add your icon here */}
              </div>
              <div className='text-container'>
                <h1>Security and Privacy</h1>
                <p>With the highest security and privacy standards</p>
              </div>
            </div>
          </div>
          <div className='col-md-4 col-sm-12 mb-4'>
            <div className='box-container p-3 shadow-sm'>
              <div className='icon-sec'>
                {/* Add your icon here */}
              </div>
              <div className='text-container'>
                <h1 className='text1'>Efficiency</h1>
                <p>Optimized for quick and accurate responses</p>
              </div>
            </div>
          </div>
          <div className='col-md-4 col-sm-12 mb-4'>
            <div className='box-container p-3 shadow-sm'>
              <div className='icon-sec'>
                {/* Add your icon here */}
              </div>
              <div className='text-container'>
                <h1>User-Friendly</h1>
                <p>Easy to use and customize for your needs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
