import React, { Component } from "react";
import "./PathfindingVisualizer.css";
import Node from "./Node/Node";
import Dijkstra from "./Algorithms/Dijkstra"

// set the Default starting and end node
const START_NODE_ROW = 1;
const START_NODE_COL = 1;
const FINISH_NODE_ROW = 40;
const FINISH_NODE_COL = 75;



// Defining a class for PathfindingVisulizer for App.js
class PathfindingVisulizer extends Component {
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

  animateShortest() {
    const {grid} = this.state;
    const startNode = grid[START_NODE_ROW][START_NODE_COL]
    const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
    const emptyList = Dijkstra(grid, startNode, finishNode);
    // generating a shortestPath with starting node as the first index
    const shortestPathList = shortestPath(finishNode);
    for (let index = 0; index < shortestPathList.length-1; index++) {
      setTimeout(() => {
        const currentNode = shortestPathList[index];
        document.getElementById(`${currentNode.row},${currentNode.col}`).className="node-shortest-path"
      }, 10*index);
    }
  }

  
  render() {
    const { grid } = this.state;

    return (
      <div>
        <div className="nav-bar">
          <button onClick={() => {
            this.animateShortest()
          }}>Visualize Dijkstra</button>
        </div>
        <div className="grid">
          {grid.map((row, rowIDX) => 
              // only returning one div object, hence return is omitted
              <div key={rowIDX} className="row">
                {/* iterate through the matrix to display the node element */}
                {row.map((node, nodeIDX) => {
                  const {row, col, isFinish, isStart} = node;
                  // passing in properties for creating a node object
                  return (<Node
                    key={nodeIDX}
                    col = {col}
                    row = {row}
                    isStart = {isStart}
                    isFinish = {isFinish} />);
              })}
              </div>
          )}
        </div>
      </div>
    );
  }
}


/*---------------------------------------------------------------------------------*/
// Helper function


// generating a matrix called grid (20X40) with node for each index
const makeGrid = () => {
  const grid = [];
  for (let row = 0; row < 42; row++) {
    const current_row = [];
    for (let col = 0; col < 81; col++) {
      current_row.push(createNode(col, row));
    }
    grid.push(current_row);
  }
  return grid;
};

// This is the node we use for backend algorithms, the one in Node.jsx is for displaying on to the screen taking each node's properties
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


// execute after animated the algorithms animation
const shortestPath = (finishNode) => {
  const shortestPathList = [];
  let currentNode = finishNode
  while (currentNode !== null) {
    shortestPathList.unshift(currentNode);
    currentNode = currentNode.previousNode;
  }
  return shortestPathList;
}

export default PathfindingVisulizer;
