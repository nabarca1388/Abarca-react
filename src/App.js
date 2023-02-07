import React, { Component } from 'react';
import './App.css';
import  BarraNavegacion  from './Components/BarraNavegacion/BarraNavegacion';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">  
          <BarraNavegacion/>
        </header>
      </div>
    );
  }
}

export default App;
