import React,{useState} from 'react'
import './contact.css'

const Contact = () => {

  
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission, e.g., send data to an API
      console.log('Form submitted:', formData);
    };

  return (
    <section id='contact'>
      <div className='contact-container'>
        <div className='contactText-container'>
            <h1>Let's Talk</h1>
            <hr className="contact-heading-hr" />
            <p>Need help with your project or have a big idea? Chat with us now and let our smart assistant provide you with instant support and insights!</p>
            <ul className='social-media'>
              <h4>Socials</h4>
        <li><a href="/">Instgram</a></li>
        <li><a href="#">Facebook</a></li>
        <li><a href="#">Twitter</a></li>
      </ul >
        </div>
        <div className='contact-form'>
        <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>

        </div>
      </div>
    </section>
  )
}

export default Contact
