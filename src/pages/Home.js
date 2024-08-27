import React from "react";
import Sidebar from "../components/Sidebar";
import Dashboard from "../components/Dashboard";
import "./Dashboard.css";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default Home;
