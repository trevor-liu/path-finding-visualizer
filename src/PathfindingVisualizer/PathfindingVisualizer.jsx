import React, { Component } from "react";
import "./PathfindingVisualizer.css";
import Node from "./Node/Node";

import Button from 'react-bootstrap/Button'

import Dijkstra from "./Algorithms/Dijkstra"
import Astar from "./Algorithms/Astar"


// set the Default starting and end node
let START_NODE_ROW = Math.floor(Math.floor(window.innerHeight/25)/3);
let START_NODE_COL = Math.floor(Math.floor(window.innerWidth/25)/4)*1;
let FINISH_NODE_ROW = Math.floor(Math.floor(window.innerHeight/25)/3);
let FINISH_NODE_COL = Math.floor(Math.floor(window.innerWidth/25)/4)*3;



// Defining a class for PathfindingVisulizer for App.js
class PathfindingVisulizer extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
      grid: [],
      mouseIsPressed: false,
      draggingStartNode: false,
      draggingEndNode: false
    };
  }

  // It render initialy to greate a grid
  componentDidMount() {
    const grid = makeGrid();
    this.setState({ grid });
  }

// ----------------------------------------------------------- Handling use interctive control ----------------------------------//
  
  handleMouseDown(row, col) {
    if (row === START_NODE_ROW && col === START_NODE_COL){
      this.setState({draggingStartNode: true});
    }
    if (row === FINISH_NODE_ROW && col === FINISH_NODE_COL){
      this.setState({draggingEndNode: true});
    }
    else{
      toggleWall(this.state.grid, row, col);
      this.setState({mouseIsPressed: true});
    }
  }

  // When mouse is pressed and entering a node
  handleMouseEnter(row, col) {
    if (!this.state.mouseIsPressed) return;
    if (this.state.draggingStartNode){
      toggleStart(this.state.grid, row, col);
      this.setState({draggingStartNode: true});

      // ----------
      START_NODE_ROW = row;
      START_NODE_COL = col;
      
    }
    // if (this.state.draggingStartNode){
    //   toggleEnd(this.state.grid, row, col);
    //   this.setState({draggingEndNode: true});
    //   // ----------
    //   FINISH_NODE_ROW = row;
    //   FINISH_NODE_COL = col;
    // } 
    else {
      toggleWall(this.state.grid, row, col);
    }
    this.setState({mouseIsPressed: true});
    
  }
  // When mouse is presed and leaving a node
  handleMouseLeave(row, col) {
    if (!this.state.mouseIsPressed) return;
    if (this.state.draggingStartNode){
      toggleStart(this.state.grid, row, col);
    }
    // if (this.state.draggingEndNode){
    //   toggleEnd(this.state.grid, row, col);
    // }

    this.setState({mouseIsPressed: true});
  }
  
  // when releasing the mouse
  handleMouseUp(row, col) {
    this.setState({draggingStartNode: false});
    this.setState({draggingEndNode: false});
    this.setState({mouseIsPressed: false});
  }
// ---------------------------------------------------------------Animating Algorithms ------------------------------------------------------------// 

  animateAlgo() {
    let algorithm = document.getElementById("dropdown-basic-button").innerHTML
    console.log(algorithm)
    const {grid} = this.state;
    const startNode = grid[START_NODE_ROW][START_NODE_COL]
    const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
    let visitedNodeinOrder = [];
    // selecting algorithms
    switch (algorithm) {
      case "Dijkstra":
        visitedNodeinOrder = Dijkstra(grid, startNode, finishNode);
        break;
      case "A* Search":
        visitedNodeinOrder = Astar(grid, startNode, finishNode);
        break;
      default:
        alert("Please select valid algorithm");
        break;
    }

    //const visitedNodeinOrder = Astar(grid, startNode, finishNode);
    const shortestPathList = shortestPath(finishNode);

    

    // generating a shortestPath with starting node as the first index
    for (let index = 1; index <= visitedNodeinOrder.length-1; index++) {
      if (index === visitedNodeinOrder.length-1) {
        setTimeout(() => {
          this.animateShortest(shortestPathList);
        }, index*1);
        return;    
      }
      setTimeout(() => {
        const currentNode = visitedNodeinOrder[index];
        document.getElementById(`${currentNode.row},${currentNode.col}`).className="node-animation"
       }, 1*index);
    }
  }



  animateShortest(shortestPathList) {
    // generating a shortestPath with starting node as the first index
    for (let index = 1; index < shortestPathList.length-1; index++) {
      setTimeout(() => {
        const currentNode = shortestPathList[index];
        document.getElementById(`${currentNode.row},${currentNode.col}`).className="node-shortest-path"
      }, 20*index);
    }
  }

  // ------------------------------------------------------------------Rendering entire grid constantly-----------------------------------------------------------------------------// 
            // Too much things rendering at the same time
            // Suggestion: only render entire grid during animation stage, and render indiidual node otherwise

  render() {
    const { grid, mouseIsPressed } = this.state;
    return (
      <div>
        <div className="visual-div" id="visual-div">
          <Button id="visualize-btn" onClick={() => {
            document.getElementById("visualize-btn").classList.toggle("changecolor")
            document.getElementById("visual-div").classList.toggle("changecolor")
            this.animateAlgo()
          }}>Visualize!</Button>
        </div>
        <div className="grid">
          {grid.map((row, rowIDX) => 
              // only returning one div object, hence return is omitted
              <div key={rowIDX} className="row">
                {/* iterate through the matrix to display the node element */}
                {row.map((node, nodeIDX) => {
                  let {row, col, isFinish, isStart, isWall} = node;
                  
                  // passing in properties for creating a node object
                  return (<Node
                    key={nodeIDX}
                    col = {col}
                    row = {row}
                    isStart = {isStart}
                    isFinish = {isFinish}
                    isWall = {isWall}
                    mouseIsPressed = {mouseIsPressed}
                    onMouseDown={(row, col) => this.handleMouseDown(row, col)}
                    onMouseEnter={(row, col) => this.handleMouseEnter(row, col)}
                    onMouseLeave={(row, col) => this.handleMouseLeave(row, col)}
                    onMouseUp={() => this.handleMouseUp()}
                     />);
              })}
              </div>
          )}
        </div>
      </div>
    );
  }
}


/*----------------------------------------------------------------------------------------Helper Function ----------------------------------*/

// Used when user drag their mouse to toggle Wall
const toggleStart = (grid, row, col) => {
  const node = grid[row][col];
  node.isStart = !node.isStart;
  grid[row][col] = node;
  return grid;
}

// const toggleEnd = (grid, row, col) => {
//   const node = grid[row][col];
//   node.isFinish = !node.isFinish;
//   grid[row][col] = node;
//   return grid;
// }

const toggleWall = (grid, row, col) => {
  const node = grid[row][col];
  node.isWall = !node.isWall;
  grid[row][col] = node;
  return grid;
};

// generating a matrix called grid (20X40) with node for each index
const makeGrid = () => {
  const grid = [];
  for (let row = 0; row < window.innerHeight/25-6; row++) {
    const current_row = [];
    for (let col = 0; col < window.innerWidth/25; col++) {
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
    isWall: false,
    // if the node row and col is the default start or end node
    isStart: row === START_NODE_ROW && col === START_NODE_COL,
    isFinish: row === FINISH_NODE_ROW && col === FINISH_NODE_COL,

    // properties for algorithms
    distance: Infinity,
    distanceFromEndNode: 0,   // for Astar algorithm
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
