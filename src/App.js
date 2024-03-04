import './App.css';
import React from 'react';
import Index from './Pages/Index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Categorydetails from './Pages/Categorydetails';
import Seeallproduct from './Pages/Seeallproduct';
import Productdetail from './Pages/Productdetail';

function App() {
  
  return (
    
    <BrowserRouter> 
  
    <Routes>
      <Route path='/' Component={Index}/>
      <Route path='/Categorydetails' Component={Categorydetails}/>
      <Route path='/Seeallproduct' Component={Seeallproduct}/>
      <Route path='/Productdetail' Component={Productdetail}/>
    </Routes>
    </BrowserRouter> 

);
 

}

export default App;
