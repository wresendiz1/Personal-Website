/* eslint-disable no-unused-vars */
import { React, useState } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js/auto";
import BarChart from "../components/BarChart";

Chart.register(CategoryScale);

function createBar(arr) {
  let left = 0;
  let right = arr.length - 1;
  let leftMax = arr[left];
  let rightMax = arr[right];
  let heightWater = arr.map((item) => {
    return { height: item, water: 0 };
  });

  while (left < right) {
    if (arr[left] < arr[right]) {
      if (arr[left] >= leftMax) {
        leftMax = arr[left];
      } else {
        heightWater[left].water = leftMax - arr[left];
      }
      left++;
    } else {
      if (arr[right] >= rightMax) {
        rightMax = arr[right];
      } else {
        heightWater[right].water = rightMax - arr[right];
      }
      right--;
    }
  }
  return heightWater;
}

function Viz() {
  // const [data, setData] = useState([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
  // const [heightWater, setHeightWater] = useState(createBar(data));
  const [heightWater, setHeightWater] = useState(() =>
    createBar([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])
  );

  const test = {
    datasets: [
      {
        label: "Original Height",
        backgroundColor: "#32669a",
        borderColor: "#19334d",
        borderWidth: 2,
        data: heightWater.map((item) => item.height),
      },
      {
        label: "Water",
        backgroundColor: "#ccebff",
        borderColor: "#1aa3ff",
        borderWidth: 2,
        data: heightWater.map((item) => (item.water > 0 ? item.water : null)),
      },
    ],
    labels: heightWater.map((item, index) => index),
  };

  return <></>;
}

export default Viz;
