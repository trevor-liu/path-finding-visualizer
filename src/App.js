import React, { Component } from "react";
import "./App.css";
import PathfindingVisualizer from "./PathfindingVisualizer/PathfindingVisualizer";

class App extends Component {
  render() {
    return (
      <div>
        <TopHeader />
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
        <div class="title-header">Path Finding Visualizer</div>
        <ul class="nav-bar">
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
          <li class="nav-element">
            <button type="button" class="nav-button">
              Start
            </button>
          </li>
          <li class="nav-element">
            <button type="button" class="nav-button">
              Stop
            </button>
          </li>
          <li class="nav-element">
            <button type="button" class="nav-button">
              Weighted node
            </button>
          </li>
          <li class="nav-element">
            <button type="button" class="nav-button">
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
      <div id="page-footer" class="footer">
        Version 1.0
      </div>
    );
  }
}

export default App;
