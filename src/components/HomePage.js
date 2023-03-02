import React, { useState } from "react";
import "./component.css";
import { FrontPage } from "./FrontPage";
import { SignInComponent } from "./SignInComponent";
import { SignUpComponent } from "./SignUpComponent";

export const HomePage = () => {
  const [screentype, setscreentype] = useState("default");
  return (
    <div className="homepage relative flex flex-1 flex-col">
      <div className="navbar relative flex  bg-transparent items-center justify-center pt-8 pb-8">
        <span className="signup-nav relative block m-2 text-lg font-bold " onClick={() => setscreentype("signup")} style={screentype !== "signin" && screentype !== "default" ? { color: "darkred" } : { textDecoration: "none" }}>
          SIGNUP
        </span>
        <span className="login-nav relative block m-2 text-lg font-bold " onClick={() => setscreentype("signin")} style={screentype === "signin" ? { color: "darkred" } : { textDecoration: "none" }}>
          LOGIN
        </span>
      </div>
      <div className="maincontainer flex flex-1 ">
        {screentype === "default" ? (
          <FrontPage />
        ) : screentype === "signin" ? (
          <SignInComponent />
        ) : (
          <SignUpComponent />
        )}
      </div>
    </div>
  );
};
