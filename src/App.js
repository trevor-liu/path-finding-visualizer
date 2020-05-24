import React, { Component } from "react";
import "./App.css";
import PathfindingVisualizer from "./PathfindingVisualizer/PathfindingVisualizer";

class App extends Component {
  render() {
    return (
      <div>
        <TopHeader/>
        <PathfindingVisualizer></PathfindingVisualizer>
        <Footer />
      </div>
    );
  }
}

class TopHeader extends React.Component {
  render() {
    return (
      <div id="page-header">
        <div className="title-header">Path Finding Visualizer</div>
        <ul className="nav-bar">
          <li>
            algorithms:
            <select>
              <option>Dijkstra's</option>
              <option>A* Search</option>
              <option>Breath First Search</option>
              <option>Greedy Best First Search</option>
              <option>Depth First Search</option>
            </select>
          </li>
          <li className="nav-element">
            <button type="button" className="nav-button">
              Stop
            </button>
          </li>
          <li className="nav-element">
            <button type="button" className="nav-button">
              Weighted node
            </button>
          </li>
          <li className="nav-element">
            <button type="button" className="nav-button">
              Tutorial
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
      <div id="page-footer" className="footer">
        Version 1.0
      </div>
    );
  }
}

export default App;
