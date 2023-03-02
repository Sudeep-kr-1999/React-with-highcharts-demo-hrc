import React, { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Highcharts from "highcharts";
import "./highcharts.css";
export const ChartComponent = ({ email }) => {
  let navigate = useNavigate();
  const logoutHandler = useCallback(
    (e) => {
      let confirmStatus = window.confirm("Are you sure you want to logout?");
      if (confirmStatus) {
        localStorage.setItem(`${email}Status`, "false");
        navigate("/");
      }
    },
    [email, navigate]
  );
  useEffect(() => {
    Highcharts.chart("highcharts", {
      chart: {
        type: "pie",
        options3d: {
          enabled: true,
          alpha: 55,
        },
      },
      title: {
        text: "Demo Donut Chart for Beijing 2022 gold medals by country",
        align: "center",
      },
      subtitle: {
        text: "3D donut in Highcharts",
        align: "center",
      },
      plotOptions: {
        pie: {
          innerSize: 400,
          depth: 65,
          cursor: "pointer",
          dataLabels: {
            enabled: true,
            format: "{point.name}<br/>{y}",
          },
          showInLegend: true,
        },
      },
      series: [
        {
          name: "Medals",
          data: [
            ["Norway", 16],
            ["Germany", 12],
            ["USA", 8],
            ["Sweden", 8],
            ["Netherlands", 8],
            ["ROC", 6],
            ["Austria", 7],
            ["Canada", 4],
            ["Japan", 3],
          ],
        },
      ],
    });
  }, []);

  return (
    <div className="chart_parent_container relative block w-screen">
      <div className="topbar_chart relative flex h-14 items-center justify-between px-5 bg-teal-900">
        <span className="useremail relative block text-white text-xl font-semibold">
          {email}
        </span>
        <span
          className="logout_chart relative block text-white text-xl font-semibold"
          onClick={logoutHandler}
        >
          SignOut
        </span>
      </div>
      <div
        className="chartcomponents relative flex flex-1 h-[88%]"
        id="highcharts"
      ></div>
      <div className="footer relative flex items-center justify-center text-gray-600 font-bold pt-4">
        All Rights Reserved © {email}- 2023
      </div>
    </div>
  );
};
