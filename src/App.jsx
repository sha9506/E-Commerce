import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Landing from './Pages/Landing';
import Products from './Pages/Products';
import Cart from './Pages/Cart';
import Orders from './Pages/Orders';


const App =()=>{


  return(<BrowserRouter>
      <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/landing' element={<Landing/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/cart' element={<Cart/>} /> 
          <Route path='/orders' element={<Orders/>} /> 
      </Routes>
  
  
  </BrowserRouter>

  )
}

export default App;
