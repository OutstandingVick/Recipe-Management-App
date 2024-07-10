import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import background from './img/bapic.jpg';
import Navbar from './Navbar';
import Card from './Card';
import Soup from './Soup';
import Rice from './Rice';
import Protein from './Protein';
import Pastries from './Pastries';
import Other from './Other';
import Drink from './Drink';

function App() {
  return (
    <Router>
      <div
        className='min-h-screen bg-cover bg-center'
        style={{ backgroundImage: `url(${background})` }}
      >
        <Navbar />
        <div className='p-4'>
          <Routes>
            <Route path='/' element={<Card />} />
            <Route path='/soup' element={<Soup />} />
            <Route path='/rice' element={<Rice />} />
            <Route path='/protein' element={<Protein />} />
            <Route path='/pastries' element={<Pastries />} />
            <Route path='/other' element={<Other />} />
            <Route path='/Drink' element={<Drink />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
