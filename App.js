import React, { Component } from 'react';
import './App.css';
import Title from './Title.js';
import Game from './GameContainer/Game';
import SelectionMenu from './SelectionMenu.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      start: false,
      eggNumber: 3,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(even){
    this.setState({
      eggNumber: even.target.value,
    })
  }

  handleSubmit(event){
    event.preventDefault();
    if (this.state.eggNumber > 1){
      this.setState({
        start: true,
      })
    }
  }

  tooSmall(){
    return (this.state.eggNumber <= 1);
  }

  render() {
    return (
      <div className='App'>
        <div className="title-container">
          <Title />
        </div>
        {this.state.start===true &&
          <div className="game-container">
            <Game eggNumber={this.state.eggNumber}/>
          </div>
        }
        {(this.state.start!==true) &&
          <div className='selectionMenuContainer'>
            <SelectionMenu onSubmit={this.handleSubmit} eggNumber={this.state.eggNumber} onChange={this.handleChange}/>
            <p> One egg is filled with gold. Ready to find it? </p>
            {this.tooSmall() && <p> Egg number must be greater than 1. </p>}
          </div>
        }
      </div>
    );
  }
}

export default App;
