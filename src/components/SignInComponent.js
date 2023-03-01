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
                placeholder="Email ID"
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
            <div className="showpassword-login relative flex pl-5">
              <label
                htmlFor="showpasslogin"
                className="showpass-label-signin relative block text-gray-600 text-base font-semibold"
              >
                Show Password
              </label>
              <input
                type="checkbox"
                name="show-pass-login"
                id="show-pass-login"
                className="relative block mx-4"
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
