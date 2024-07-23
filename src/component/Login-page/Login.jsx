import React,{useState} from 'react'
import './login.css'
const Login = () => {

    const [formData, setFormData] = useState({
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
    
     


  return (
    <div className='login-box'>
      <div className='login-container'>
      <h5>Hi! Welcome to ChatBOT...</h5>
      <p>Choose one of the option to go</p>
      
      <div className='login-form'>
      <div className='input-group'>
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

            <div className='input-group'>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
      </div>

      <p className='login-small-text'>Or continue with</p>
      <div className='login-icn-option'>
         <div className='icn'><i className="fab fa-google"></i></div>
         <div className='icn'><i class="fa-brands fa-meta"></i></div>
         <div className='icn'><i class="fa-brands fa-apple"></i></div>
      </div>
      <button className='login-btn2'>Log in</button>
    </div>
    </div>
  );
};

export default Login
