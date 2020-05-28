import React, { Component } from "react";
import "./App.css";
import PathfindingVisualizer from "./PathfindingVisualizer/PathfindingVisualizer";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button' 

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
  constructor() {
    super();
    this.state = {
      dropDownValue: "Algorithms"
    }
  }

  changeValue(text) {
    this.setState({dropDownValue: text})
  }

  render() {
    return (
      <div id="page-header">
        
        <div className="title-header">Path Finding Visualizer</div>
        <ul className="nav-bar">
          <li>
            <DropdownButton id="dropdown-basic-button" title={this.state.dropDownValue}>
              <Dropdown.Item as="button">
                <div onClick={(e) => this.changeValue(e.target.textContent)}>Dijkstra</div>
              </Dropdown.Item>
              <Dropdown.Item as="button">
              <div onClick={(e) => this.changeValue(e.target.textContent)}>A* Search</div>
              </Dropdown.Item>
              <Dropdown.Item as="button">
              <div onClick={(e) => this.changeValue(e.target.textContent)}>Breath First search</div>
              </Dropdown.Item>
              <Dropdown.Item as="button">
              <div onClick={(e) => this.changeValue(e.target.textContent)}>Greedy Best First search</div>
              </Dropdown.Item>
              <Dropdown.Item as="button">
              <div onClick={(e) => this.changeValue(e.target.textContent)}>Depth First search</div>
              </Dropdown.Item>
            </DropdownButton>
          </li>
          <li className="nav-element">
            <Button id="stop-vis">
              Stop
            </Button>
          </li>
          <li className="nav-element">
            <Button id="weight-btn">
              Weighted node
            </Button>
          </li>
          <li className="nav-element">
            <Button id="tuitorial-btn">
              Tutorial
            </Button>
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
