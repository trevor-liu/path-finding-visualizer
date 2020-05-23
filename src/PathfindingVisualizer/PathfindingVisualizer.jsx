import React, { Component } from "react";
import "./PathfindingVisualizer.css";
import Node from "./Node/Node";

// set the Default starting and end node
const START_NODE_ROW = 10;
const START_NODE_COL = 8;
const FINISH_NODE_ROW = 10;
const FINISH_NODE_COL = 33;

// Defining a class for PathfindingVisulizer for App.js
export default class PathfindingVisulizer extends Component {
  constructor() {
    super();
    this.state = {
      grid: [],
    };
  }

  // It render initialy to greate a grid
  componentDidMount() {
    const grid = makeGrid();
    this.setState({ grid });
  }

  render() {
    const { grid } = this.state;

    return (
      <div className="grid">
        {grid.map((row, rowIdx) => 
            // only returning one div object, hence return is omitted
            <div className="row">
              {/* iterate through the matrix to display the node element */}
              {row.map((node, nodeIdx) => {
                const {row, col, isFinish, isStart} = node;
                // passing in properties for creating a node object
                return (<Node
                  col = {col}
                  row = {row}
                  isStart = {isStart}
                  isFinish = {isFinish} />);
            })}
            </div>
        )}
      </div>
    );
  }
}

// generating a matrix called grid (20X40) with node for each index
const makeGrid = () => {
  const grid = [];
  for (let row = 0; row < 44; row++) {
    const current_row = [];
    for (let col = 0; col < 82; col++) {
      current_row.push(createNode(col, row));
    }
    grid.push(current_row);
  }
  return grid;
};

// creating a Node with properties
const createNode = (col, row) => {
  return {
    col,
    row,

    // if the node row and col is the default start or end node
    isStart: row === START_NODE_ROW && col === START_NODE_COL,
    isFinish: row === FINISH_NODE_ROW && col === FINISH_NODE_COL,

    // properties for algorithms
    distance: Infinity,
    isVisited: false,
    previousNode: null,
  };
};



