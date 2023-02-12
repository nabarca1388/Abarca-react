import React, { Component } from 'react';
import './App.css';
import BarraNavegacion from './Components/BarraNavegacion/BarraNavegacion';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';



function App() {
  return (
    <div className="App">
      <div>
        <img className='' alt='1' src='./img/logo.png' width='50px' />
      </div>

      <header className="App-header">
        <BarraNavegacion />
      </header>

      <div>
        <ItemListContainer greeting='List container' />
      </div>

    </div>
  );
}

export default App;
