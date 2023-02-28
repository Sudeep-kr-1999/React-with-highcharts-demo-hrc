import React from "react";

export const SignUpComponent = () => {
  return (
    <div className="signup relative flex flex-1 bg-white items-center justify-center">
      <div className="register-body-container">
        <div className="signup-container">
          <div className="register-label">Register</div>
          <form className="register-form">
            <div className="register-name">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
              />
            </div>
            <div className="register-user-name">
              <input
                type="text"
                id="register-name"
                placeholder="Username (minimum 8 characters)"
              />
            </div>
            <div className="register-email">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
              />
            </div>
            <div className="register-phone-number">
              <input
                type="tel"
                name="phoneNumber"
                id="phone-number"
                placeholder="PhoneNumber (10 characters) "
              />
            </div>
            <div className="register-password">
              <input
                type="password"
                name="password-register"
                id="user-password-register"
                placeholder="Password (minimum 8 characters)"
              />
            </div>
            <div className="user-register-button">
              <button type="submit" id="submit-register-button">
                Register
              </button>
              <button id="register-close">Close</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
