import React, { Component } from "react";
import "./PathfindingVisualizer.css";
import Node from "./Node/Node";

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
              {row.map((node, nodeIdx) => (
                <Node></Node>
              ))}
            </div>
          );
        })}
      </div>
    );
  }
}

const makeGrid = () => {
  const grid = [];
  for (let row = 0; row < 40; row++) {
    const current_row = [];
    for (let col = 0; col < 81; col++) {
      const node = {};
      current_row.push(node);
    }
    grid.push(current_row);
  }
  return grid;
};
