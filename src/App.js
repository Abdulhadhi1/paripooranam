import React from 'react'
import { Link } from 'react-router-dom';
import {BrowserRouter as Router, Routes,Route, } from 'react-router-dom';
import './App.css';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
 

function App() {
  return (
    <>




    <Router>
     
    <ul className='navbars'>
     <li><Link to= '/' >Screen1</Link></li> 
     <li><Link to= '/Screen2'>Screen2</Link></li> 
 
      </ul>
      <Routes>
        <Route path='/' element ={<Screen1 />} />
        <Route path='/Screen2' element ={<Screen2 />} />
      </Routes>
    </Router>

</>




  )
}

export default App