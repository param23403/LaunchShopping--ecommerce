import './App.css';
import Error from './components/Error.js';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home.js';
import React from 'react';

document.title = "shopCrunch";
document.body.style = 'background: #D6FFD6;';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="*" element={<Error />}/>
    </Routes>
    </div>
  );
}

export default App;
