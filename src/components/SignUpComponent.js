import React, { useCallback, useEffect, useState } from "react";

export const SignUpComponent = () => {
  const [registerState, setregisterState] = useState({
    email_signup: "",
    password_register: "",
    confirm_password_register: "",
    show_pass_register: false,
    show_pass_register_confirm: false,
  });

  const changeHandler = useCallback((e) => {
    setregisterState((previousState) => {
      return { ...previousState, [e.target.name]: e.target.value };
    });
  }, []);

  const checkHandler = useCallback((e) => {
    setregisterState((previousState) => {
      return { ...previousState, [e.target.name]: e.target.checked };
    });
  }, []);

  useEffect(() => {
    console.log(registerState);
  }, [registerState]);

  return (
    <div className="signup relative flex flex-1 bg-white items-center justify-center">
      <div className="register-body-container">
        <div className="signup-container">
          <div className="register-label">Register</div>
          <form className="register-form">
            <div className="register-email">
              <input
                type="email"
                name="email_signup"
                id="email"
                placeholder="Email Address"
                onChange={changeHandler}
              />
            </div>
            <div className="register-password">
              <input
                type={
                  registerState.show_pass_register !== false
                    ? "text"
                    : "password"
                }
                name="password_register"
                id="user-password-register"
                placeholder="Password (minimum 8 characters)"
                onChange={changeHandler}
              />
            </div>
            <div className="showpassword-register relative flex pl-5">
              <label
                htmlFor="showpassregister"
                className="showpass-label-register relative block text-gray-600 text-base font-semibold"
              >
                Show Password
              </label>
              <input
                type="checkbox"
                name="show_pass_register"
                id="show-pass-register"
                className="relative block mx-4"
                onChange={checkHandler}
              />
            </div>
            <div className="register-password-again">
              <input
                type={
                  registerState.show_pass_register_confirm !== false
                    ? "text"
                    : "password"
                }
                name="confirm_password_register"
                id="user-password-register-again"
                placeholder="Confirm Password"
                onChange={changeHandler}
              />
            </div>
            <div className="showpassword-register-confirm relative flex pl-5">
              <label
                htmlFor="showpassregister-confirm"
                className="showpass-label-register-confirm relative block text-gray-600 text-base font-semibold"
              >
                Show Confirm Password
              </label>
              <input
                type="checkbox"
                name="show_pass_register_confirm"
                id="show-pass-register-confirm"
                className="relative block mx-4"
                onChange={checkHandler}
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
