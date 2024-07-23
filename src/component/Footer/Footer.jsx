import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <div>
       <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Chatbot Inc. All rights reserved.</p>
        <div className="footer-links">
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer
