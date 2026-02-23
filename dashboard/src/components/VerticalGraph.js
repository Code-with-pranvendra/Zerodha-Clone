import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const VerticalGraph = ({ data }) => {
  return (
    <div style={{ width: "4100px",height:"450px" ,margin: "20px auto" }}>
      <Bar data={data} />
    </div>
  );
};

export default VerticalGraph;
