import React, { useCallback, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ChartComponent } from "./ChartComponent";
export const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleNavigation = useCallback(() => {
    localStorage.setItem(`${location.state["name"]}Status`, "false");
    navigate("/");
  }, [navigate, location]);
  useEffect(() => {
    window.onbeforeunload = () => {
      handleNavigation();
    };
    if (location.state === null) {
      navigate("/");
    }
  }, [navigate, handleNavigation, location]);

  return location.state !== null ? <ChartComponent email={location.state['name']}/> : <div>error</div>;
};
