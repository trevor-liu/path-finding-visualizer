import React from 'react';
import './App.css';

function App() {
  return (
      TopHeader()
  );
}

function TopHeader() {
  return (
    <div>
      <div class="title-header">Path Finding Visualizer</div>
      <ul class="nav-bar">
        <li>algorithms:
            <select>
              <option>Dijkstra's</option>
              <option>A* Search</option>
              <option>Breath First Search</option>
              <option>Greedy Best First Search</option>
              <option>Depth First Search</option>
            </select>
        </li>
        <li class="nav-element"><button type="button" class="nav-button">Start</button></li>
        <li class="nav-element"><button type="button" class="nav-button">Stop</button></li>
        <li class="nav-element"><button type="button" class="nav-button">Weighted node</button></li>
        <li class="nav-element"><button type="button" class="nav-button">Tutorial</button></li>
      </ul>
    </div>
  );
}


export default App;
