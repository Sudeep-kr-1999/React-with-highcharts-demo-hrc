import React, { useState } from "react";
import "./component.css";
import { FrontPage } from "./FrontPage";
import { SignInComponent } from "./SignInComponent";
import { SignUpComponent } from "./SignUpComponent";

export const HomePage = () => {
  const [screentype, setscreentype] = useState("default");
  return (
    <div className="homepage relative flex flex-1 flex-col">
      <div className="navbar relative flex  bg-white items-center justify-center pt-8 pb-8">
        <span className="signup-nav relative block m-2 text-lg font-bold text-black" onClick={()=>setscreentype("signup")}>
          SIGNUP
        </span>
        <span className="login-nav relative block m-2 text-lg font-bold text-black" onClick={()=>setscreentype("signin")}>
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
