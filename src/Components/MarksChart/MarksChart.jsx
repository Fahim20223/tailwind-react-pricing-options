import React, { use } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const MarksChart = ({ marksPromise }) => {
  const marksRes = use(marksPromise);

  const marksData = marksRes.data;
  //   console.log(marksData);

  //data processing to the chart

  const marksDataChart = marksData.map((studentData) => {
    const student = {
      id: studentData.id,
      name: studentData.name,
      physics: studentData.marks.physics,
      chemistry: studentData.marks.chemistry,
      math: studentData.marks.math,
      biology: studentData.marks.biology,
    };
    const average =
      (student.physics + student.chemistry + student.biology + student.math) /
      3;
    student.average = average;
    return student;
  });
  console.log(marksDataChart);
  return (
    <div>
      <BarChart width={500} height={300} data={marksDataChart}>
        <XAxis dataKey={"name"}></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
        <Legend />
        <Bar dataKey={"average"} fill="green"></Bar>
        <Bar dataKey={"chemistry"} fill="blue"></Bar>
      </BarChart>
    </div>
  );
};

export default MarksChart;
