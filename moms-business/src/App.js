import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Millets from './Millets';
import Products from './Products';
import Process from './Process';
import Contact from './Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/millets">Raw Millets</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/process">Process</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/millets" element={<Millets />} />
          <Route path="/products" element={<Products />} />
          <Route path="/process" element={<Process />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
