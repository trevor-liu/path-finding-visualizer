import React, { Component } from "react";
import "./Node.css";

class Node extends Component {
  render() {
    let {col, row, isFinish, isStart, isWall, onMouseDown, onMouseEnter, onMouseUp} = this.props;
    return (
      <div 
        id={`${row},${col}`}
        className={isFinish? "node-finish": isStart? "node-start": isWall? "node-wall": "node"}
        onMouseDown = {() => onMouseDown(row, col)}
        onMouseEnter = {() => onMouseEnter(row, col)}
        onMouseUp = {() => onMouseUp(row, col)}
      ></div>
      );
    }
  }
  
  
  export default Node;
  