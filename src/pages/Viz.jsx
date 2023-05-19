/* eslint-disable no-unused-vars */
import { React, useState } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js/auto";
import BarChart from "../components/BarChart";
import { Button, Container, Form } from "react-bootstrap";

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

  return (
    <>
      {/* <Header /> */}
      <Container fluid className="bg-light">
        <Container>
          <h1 className="text-center py-4">Trapping Water Visualization</h1>
          <p className="text-center">
            Created a bar chart to help visualize the solution to{" "}
            <a
              href="https://leetcode.com/problems/trapping-rain-water/description/"
              target="_blank"
              rel="noopener noreferrer"
            >
              #42
            </a>
            : Trapping Rain Water from LeetCode:
            <br />
            <span className="text-muted">
              Given n non-negative integers representing an elevation map where
              the width of each bar is 1, compute how much water it can trap
              after raining.
            </span>
          </p>
          <BarChart data={test} />
        </Container>

        <Container>
          {/* <input type="text" className="form-control w-25" value={input} onChange={(e) => setInput(e.target.value)} />
          <Button className="mx-2" onClick={() => { setData(input.split(",").map((item) => parseInt(item))); setHeightWater(createBar(input.split(",").map((item) => parseInt(item)))); }}>Submit</Button> */}
          <Form
            className="py-4"
            onSubmit={(form) => {
              form.preventDefault();
              setHeightWater(
                createBar(
                  form.target[0].value.split(",").map((item) => parseInt(item))
                )
              );
            }}
          >
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1"
              />
              <Form.Text className="text-muted">
                Enter numbers separated by commas
              </Form.Text>
            </Form.Group>
            <Button variant="info" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </Container>
    </>
  );
}

export default Viz;
