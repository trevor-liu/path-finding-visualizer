import React, { Component } from "react";
import "./Node.css";

export default class Node extends Component {
  const = {
    row: this.props.row,
    col: this.props.col,
  };

  state = {
    isClicked: false,
  };
  render() {
    return (
      <button
        className={this.state.isClicked ? "clicked-node" : "node"}
        onClick={() => {
          if (this.state.isClicked === true) {
            this.setState({ isClicked: false });
          } else {
            this.setState({ isClicked: true });
          }
        }}
      ></button>
    );
  }
}
