import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

export const SignInComponent = () => {
  let navigate = useNavigate();
  const [loginState, setloginState] = useState({
    login_email: "",
    password_login: "",
    show_pass_login: false,
  });

  const changeHandler = useCallback((e) => {
    setloginState((previousState) => {
      return { ...previousState, [e.target.name]: e.target.value };
    });
  }, []);

  const checkHandler = useCallback((e) => {
    setloginState((previousState) => {
      return { ...previousState, [e.target.name]: e.target.checked };
    });
  }, []);

  const signInSubmitHandler = useCallback(
    (e) => {
      e.preventDefault();
      if (loginState.login_email === "") {
        alert("please enter the valid email");
      } else {
        if (localStorage.getItem(loginState.login_email) !== null) {
          if (
            localStorage.getItem(loginState.login_email) ===
            loginState.password_login
          ) {
            localStorage.setItem(`${loginState.login_email}Status`, "true");
          } else {
            alert("please enter the correct password");
          }
        } else {
          alert("account with this email donot exists");
        }
      }
      if (localStorage.getItem(`${loginState.login_email}Status`) === "true") {
        navigate("/dashboard", { state: { name: loginState.login_email } });
      }
    },
    [loginState, navigate]
  );

  const resetHandler = useCallback((e) => {
    setloginState({
      login_email: "",
      password_login: "",
      show_pass_login: false,
    });
  }, []);

  return (
    <div className="signin relative flex flex-1 bg-white items-center justify-center">
      <div className="login-body-container">
        <div className="login-container">
          <div className="login-label">Login</div>
          <form className="login-form" onSubmit={signInSubmitHandler}>
            <div className="username-login">
              <input
                type="email"
                placeholder="Email ID"
                id="user-login"
                name="login_email"
                onChange={changeHandler}
              />
            </div>
            <div className="password-login">
              <input
                type={
                  loginState.show_pass_login !== false ? "text" : "password"
                }
                name="password_login"
                id="user-password"
                placeholder="Password (minimum 8 characters)"
                onChange={changeHandler}
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
                name="show_pass_login"
                id="show-pass-login"
                className="relative block mx-4"
                onChange={checkHandler}
              />
            </div>
            <div className="sumbit-login-btn">
              <button type="submit" id="login-submit">
                Submit
              </button>
              <button type="reset" id="login-close" onClick={resetHandler}>
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
