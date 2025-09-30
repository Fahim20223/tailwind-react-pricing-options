import { ScatterChart } from "lucide-react";
import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const marks = [
  {
    id: 1,
    name: "Aarav Khan",
    physics: 85,
    chemistry: 78,
    biology: 90,
    math: 88,
  },
  {
    id: 2,
    name: "Sophia Rahman",
    physics: 92,
    chemistry: 88,
    biology: 84,
    math: 95,
  },
  {
    id: 3,
    name: "Noah Hasan",
    physics: 75,
    chemistry: 80,
    biology: 70,
    math: 85,
  },
  {
    id: 4,
    name: "Maya Islam",
    physics: 89,
    chemistry: 76,
    biology: 92,
    math: 81,
  },
  {
    id: 5,
    name: "Ethan Chowdhury",
    physics: 68,
    chemistry: 72,
    biology: 65,
    math: 70,
  },
  {
    id: 6,
    name: "Liam Hossain",
    physics: 95,
    chemistry: 91,
    biology: 88,
    math: 93,
  },
  {
    id: 7,
    name: "Aria Ahmed",
    physics: 82,
    chemistry: 85,
    biology: 80,
    math: 78,
  },
  {
    id: 8,
    name: "Zayn Karim",
    physics: 74,
    chemistry: 79,
    biology: 83,
    math: 77,
  },
  {
    id: 9,
    name: "Hana Siddiqui",
    physics: 90,
    chemistry: 87,
    biology: 93,
    math: 88,
  },
  {
    id: 10,
    name: "Ryan Kabir",
    physics: 81,
    chemistry: 75,
    biology: 78,
    math: 84,
  },
];

const ResultChart = () => {
  return (
    <div>
      <LineChart width={700} height={550} data={marks}>
        <XAxis dataKey={"name"}></XAxis>
        <YAxis></YAxis>
        <Legend />
        <Tooltip />
        <Line dataKey={"physics"} stroke="red"></Line>
        <Line dataKey={"biology"} stroke="blue"></Line>
      </LineChart>
      {/* ------------------------------- */}

      <BarChart width={1500} height={600} data={marks}>
        <CartesianGrid strokeDasharray={"3 3"}></CartesianGrid>
        <XAxis dataKey={"name"}></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
        <Legend />
        <Bar dataKey={"math"} barSize={20} fill="purple" />
        <Bar dataKey={"chemistry"} barSize={20} fill="green" />
        <Bar dataKey={"biology"} barSize={20} fill="skyblue"></Bar>
        <Bar dataKey={"physics"} barSize={20} fill="gray"></Bar>
      </BarChart>
    </div>
  );
};

export default ResultChart;
