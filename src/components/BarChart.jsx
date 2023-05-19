import React from "react";
import { Container } from "react-bootstrap";
import { Bar } from "react-chartjs-2";

function BarChart({ data }) {
  return (
      <Bar
        data={data}
        options={
          {
          animation:{
            delay: 500,
          },
          plugins: {
            title: {
              display: true,
              text: "Trapping Water",
            },
          },
          responsive:true,
          scales: {
            x: { stacked: true },
            y: {
              stacked: true,
              border: {
                display: true,
              },
              grid: {
                display: true,
              },
              ticks:{
                precision:0
              }
            },
          },
        }}
      />
  );
}

export default BarChart;
