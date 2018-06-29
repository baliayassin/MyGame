import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.paintBlue=this.paintBlue.bind(this);
  }
  paintBlue(){
    alert(`color me blue ${this.props.duration} seconds
  for ${this.props.proj}projects `);
      

  }
  render() {
    return (
     <div onClick={this.paintBlue}>click to be blue </div> 
    );
  }
}

export default App;
