import React from "react";

export const SignInComponent = () => {
  return (
    <div className="signin relative flex flex-1 bg-white items-center justify-center">
      <div className="login-body-container">
        <div className="login-container">
          <div className="login-label">Login</div>
          <form className="login-form">
            <div className="username-login">
              <input
                type="text"
                placeholder="UserName or Email or PhoneNumber (minimum 8 characters)"
                id="user-login"
              />
            </div>
            <div className="password-login">
              <input
                type="password"
                name="password"
                id="user-password"
                placeholder="Password (minimum 8 characters)"
              />
            </div>
            <div className="sumbit-login-btn">
              <button type="submit" id="login-submit">
                Submit
              </button>
              <button id="login-close">Close</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
