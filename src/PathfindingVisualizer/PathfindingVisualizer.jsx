import React, { Component } from "react";
import "./PathfindingVisualizer.css";
import Node from "./Node/Node";

const START_NODE_ROW = 10;
const START_NODE_COL = 8;
const FINISH_NODE_ROW = 10;
const FINISH_NODE_COL = 33;

export default class PathfindingVisulizer extends Component {
  constructor() {
    super();
    this.state = {
      grid: [],
    };
  }

  componentDidMount() {
    const grid = makeGrid();
    this.setState({ grid });
  }

  render() {
    const { grid } = this.state;

    return (
      <div className="grid">
        {grid.map((row, rowIdx) => {
          return (
            <div>
              {row.map((node, nodeIdx) => {
                const {row, col, isFinish, isStart} = node;
                //console.log({col})
                return (<Node
                  col = {col}
                  row = {row}
                  isStart = {isStart}
                  isFinish = {isFinish} />);
            })}
            </div>
          );
        })}
      </div>
    );
  }
}

const makeGrid = () => {
  const grid = [];
  for (let row = 0; row < 20; row++) {
    const current_row = [];
    for (let col = 0; col < 40; col++) {
      current_row.push(createNode(col, row));
    }
    grid.push(current_row);
  }
  return grid;
};

const createNode = (col, row) => {
  return {
    col,
    row,
    isStart: row === START_NODE_ROW && col === START_NODE_COL,
    isFinish: row === FINISH_NODE_ROW && col === FINISH_NODE_COL,
    distance: Infinity,
    isVisited: false,
    previousNode: null,
  };
};



