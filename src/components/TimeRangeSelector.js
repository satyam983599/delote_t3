import React, { useState } from "react";
import "./TimeRangeSelector.css";

const TimeRangeSelector = ({ onSelectRange }) => {
  const [activeRange, setActiveRange] = useState("3h");

  const handleRangeChange = (range) => {
    setActiveRange(range);
    onSelectRange(range);
  };

  return (
    <div className="time-range-selector">
      <button
        className={activeRange === "3h" ? "active" : ""}
        onClick={() => handleRangeChange("3h")}
      >
        Last 3 hours
      </button>
      <button
        className={activeRange === "24h" ? "active" : ""}
        onClick={() => handleRangeChange("24h")}
      >
        Last 24 hours
      </button>
      <button
        className={activeRange === "7d" ? "active" : ""}
        onClick={() => handleRangeChange("7d")}
      >
        Last 7 days
      </button>
      <button
        className={activeRange === "30d" ? "active" : ""}
        onClick={() => handleRangeChange("30d")}
      >
        Last 30 days
      </button>
    </div>
  );
};

export default TimeRangeSelector;
