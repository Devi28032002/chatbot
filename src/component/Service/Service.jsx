import React from 'react';
import './service.css';
import '@fortawesome/fontawesome-free/css/all.min.css';



const Service = () => {
  return (
    <section id='services'>
    <div className='service-container'>
      <div className='serviceText-container'>
        <h1>Services we Provide</h1>
        <hr className="service-heading-hr" />
        <p>Transforming Customer Interactions Across Industries</p>
        <ul>
          <li className='service-item'>
            <span className='service-icon'> <i className="fas fa-check"></i></span>
            <p>Customer Service</p>
          </li>
          <li className='service-item'>
            <span className='service-icon'> <i className="fas fa-check"></i></span>
            <p>Technical Support</p>
          </li>
          <li className='service-item'>
            <span className='service-icon'> <i className="fas fa-check"></i></span>
            <p>Sales Assistance</p>
          </li>
          <li className='service-item'>
            <span className='service-icon'> <i className="fas fa-check"></i></span>
            <p>Information Dissemination</p>
          </li>
        </ul>
      </div>
      <div className='image-container'>
        <img src="/chatbot3-img.png" alt="Service Illustration" className='service-image' />
      </div>
    </div>
    </section>
  );
}

export default Service;
