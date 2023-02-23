import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import BarraNavegacion from './Components/BarraNavegacion/BarraNavegacion';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';




function App() {
  return (

    <BrowserRouter>            
      
      <BarraNavegacion />
      
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/item/:id' element={<ItemDetailContainer/>} />
        <Route path='/category/:categoryId' element={<ItemListContainer/>} />
        <Route path='#' element={<div><h1>Esta pagina no existe</h1></div>} />
      </Routes>

    </BrowserRouter>

    //<div className="App">

      //<div>
        //<img className='' alt='1' src='./img/logo.png' width='50px' />
      //</div>

      //<header className="App-header">
        //<BarraNavegacion />
      //</header>

      //<div>
        //<ItemListContainer greeting='List container' />
      //</div>

    //</div>
  )
}

export default App;
