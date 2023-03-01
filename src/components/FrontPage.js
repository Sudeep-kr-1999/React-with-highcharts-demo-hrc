import React from "react";
import logo from "./logo.png";
export const FrontPage = () => {
  return (
    <div className="front-page-container relative flex flex-1 flex-col items-center justify-center">
      <div className="image-logo">
        <img src={logo} alt="logo" srcset="" />
      </div>
      <div className="frontpage relative block bg-white text-8xl text-black font-bold">
        Demo Project in React
      </div>
    </div>
  );
};