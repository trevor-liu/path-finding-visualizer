import React from 'react';
import './App.css';

class TopHeader extends React.Component {
  render () {
    return (
      <div id="page-header">
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
}

class Footer extends React.Component {
  render () {
    return (
      <div id="page-footer" class="footer">
        Version 1.0  
      </div>
    );
  }
}

class Square extends React.Component {
  const = {
    row: this.props.row,
    col: this.props.col
  }

  state = {
    isClicked: false,
  }
  render () {
    return (
      <button className={this.state.isClicked ? "clicked-node" : "node"} onClick= { () => {
        if (this.state.isClicked === true){
          this.setState({isClicked: false})
        }
        else {
          this.setState({isClicked: true})
        };
        }     
      }></button>
    );
  }   
}

const makeGrid = () => {
  const grid = [];
  for (let row=0; row<20; row++) {
    const current_row = [];
    for (let col=0; col<50; col++){
      current_row.push(col);
    }
    grid.push(current_row);
  }
  return grid;
};


class Grid extends React.Component {
  constructor() {
    super();
    this.state = {
      grid: []
    }
  }

  componentDidMount() {
    const grid = makeGrid();
    this.setState({grid})
  }

  render () {
    const grid = this.state;
    console.log(grid)
      return (
        <div></div>
      )
  }

}


class App extends React.Component {
  render () {
    return (
      <div>
        <TopHeader />
        <Footer />
        <Grid />
      </div>
    );
  }
}

export default App;