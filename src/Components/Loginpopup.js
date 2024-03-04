import React, { useState } from 'react';
 

const Loginpopup = ({ handleClose }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Input value:', inputValue);
 
  };

  return (
    <div>
      <div className='background-popup'>
        <div className="loginpopup">
          <span onClick={handleClose}>
            <i className="fa-solid fa-arrow-left"></i>
          </span>
          <div className="popupbody">
            <div className="popup_content">
              <img src="../Assets/Images/app_logo.svg" alt="applogo"/>
              <div className="login_content">
                <h3>India's last minute app</h3>
                <h6>Log in or Sign up</h6>
                <form className='login_form' onSubmit={handleSubmit}>
                  <input 
                    type='text' 
                    className='log_input' 
                    name='number' 
                    placeholder='Enter mobile number' 
                    id='login_number' 
                    value={inputValue}
                    onChange={handleInputChange}
                  />
                  <button type="submit" className='login_btn'>Continue</button>
                </form>
                <p>By continuing, you agree to our Terms of service & Privacy policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loginpopup;
