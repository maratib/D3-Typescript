import * as d3 from "d3";

const data = [
  { w: 200, h: 200, fill: "blue" },
  { w: 150, h: 150, fill: "red" },
  { w: 100, h: 100, fill: "green" },
];

// get svg element ref
const svg = d3.select("svg");

// Join data to rects
const rects = svg.selectAll("rect").data(data);

// add attrs to rects already in the DOM
// rects
//   .attr("width", (d) => d.w)
//   .attr("height", (d) => d.h)
//   .attr("fill", (d) => d.fill);

// append the Enter Selection to DOM
// Virtual elements
rects
  .enter()
  .append("rect")
  .attr("width", (d) => d.w)
  .attr("height", (d) => d.h)
  .attr("fill", (d) => d.fill);
