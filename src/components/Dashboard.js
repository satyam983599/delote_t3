import React, { useState } from "react";
import SensorGraph from "./SensorGraph";

const Dashboard = () => {
  const [time, setTime] = useState("last3Hours");

  const getData = () => {
    switch (time) {
      case "last3Hours":
        return {
          labels: [
            "22:14",
            "22:34",
            "23:14",
            "23:34",
            "23:54",
            "00:14",
            "00:34",
            "00:54",
            "01:14",
          ],
          datasets: [
            {
              label: "Internet Speed (Mbps)",
              data: [20, 30, 25, 40, 35, 50, 45, 60, 55],
              borderColor: "rgba(75,192,192,1)",
              backgroundColor: "rgba(75,192,192,0.2)",
              fill: true,
            },
          ],
        };
      case "last24Hours":
        return {
          labels: Array.from({ length: 24 }, (_, i) => `${i}:00`),
          datasets: [
            {
              label: "Internet Speed (Mbps)",
              data: Array.from({ length: 24 }, () =>
                Math.floor(Math.random() * 60)
              ),
              borderColor: "rgba(255,99,132,1)",
              backgroundColor: "rgba(255,99,132,0.2)",
              fill: true,
            },
          ],
        };
      case "last7Days":
        return {
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          datasets: [
            {
              label: "Internet Speed (Mbps)",
              data: Array.from({ length: 7 }, () =>
                Math.floor(Math.random() * 60)
              ),
              borderColor: "rgba(54,162,235,1)",
              backgroundColor: "rgba(54,162,235,0.2)",
              fill: true,
            },
          ],
        };
      case "last30Days":
        return {
          labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
          datasets: [
            {
              label: "Internet Speed (Mbps)",
              data: Array.from({ length: 30 }, () =>
                Math.floor(Math.random() * 60)
              ),
              borderColor: "rgba(153,102,255,1)",
              backgroundColor: "rgba(153,102,255,0.2)",
              fill: true,
            },
          ],
        };
      default:
        return {};
    }
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `Sensor Data (${time.replace("last", "Last ")})`,
      },
    },
  };

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="time-range-buttons">
        <button onClick={() => setTime("last3Hours")}>Last 3 hours</button>
        <button onClick={() => setTime("last24Hours")}>Last 24 hours</button>
        <button onClick={() => setTime("last7Days")}>Last 7 days</button>
        <button onClick={() => setTime("last30Days")}>Last 30 days</button>
      </div>
      <SensorGraph
        title="Internet Sensor Graph"
        data={getData()}
        options={options}
      />

      <SensorGraph
        title="Motion Graph Sensor"
        data={getData()}
        options={options}
      />
      <SensorGraph
        title="Latency Sensor Graph"
        data={getData()}
        options={options}
      />
      <SensorGraph
        title="Battery Graph Sensor"
        data={getData()}
        options={options}
      />
    </div>
  );
};

export default Dashboard;
