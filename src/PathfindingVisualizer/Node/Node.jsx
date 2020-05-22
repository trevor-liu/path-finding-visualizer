import React, { Component } from "react";
import "./Node.css";

export default class Node extends Component {
  state = {
    isClicked: false
  }
  render() {
    const {col, row, isFinish, isStart} = this.props;
    console.log(this.props);
    return (
      <div className={isFinish? "node-finish": isStart? "node-start":""}> </div>
      // <button
      //   className={isFinish? "node-finish": isStart? "node-start": this.state.isClicked ? "clicked-node" : "node"}
      //   onClick={() => {
      //     if (this.state.isClicked === true) {
      //       this.setState({ isClicked: false });
      //     } else {
      //       this.setState({ isClicked: true });
      //     }
      //   }}
      // ></button>
    );
  }
}


/*
export default class Node extends Component {
  render() {
    const {
      col,
      isFinish,
      isStart,
      isWall,
      onMouseDown,
      onMouseEnter,
      onMouseUp,
      row,
    } = this.props;
    
    const extraClassName = isFinish? 'node-finish': isStart? 'node-start': isWall? 'node-wall': '';
    // extraClassName = 'node-finish';

    return (
      <div
        id={`node-${row}-${col}`}
        className={`node ${extraClassName}`}
        onMouseDown={() => onMouseDown(row, col)}
        onMouseEnter={() => onMouseEnter(row, col)}
        onMouseUp={() => onMouseUp()}></div>
    );
  }
}
*/