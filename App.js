import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { FaHome, FaFilm, FaShoppingCart, FaInfoCircle } from 'react-icons/fa';

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <h1 className="logo">StreamList</h1>
          <ul className="nav-links">
            <li><Link to="/"><FaHome /> Home</Link></li>
            <li><Link to="/movies"><FaFilm /> Movies</Link></li>
            <li><Link to="/cart"><FaShoppingCart /> Cart</Link></li>
            <li><Link to="/about"><FaInfoCircle /> About</Link></li>
          </ul>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<StreamList />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function StreamList() {
  const [streamInput, setStreamInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Stream Input:', streamInput);
    setStreamInput('');
  };

  return (
    <div className="page">
      <h2>Enter Your Stream</h2>
      <form onSubmit={handleSubmit} className="stream-form">
        <input
          type="text"
          value={streamInput}
          onChange={(e) => setStreamInput(e.target.value)}
          placeholder="Enter a stream name..."
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

function Movies() {
  return <div className="page"><h2>Movies Page - Coming Soon</h2></div>;
}

function Cart() {
  return <div className="page"><h2>Cart Page - Coming Soon</h2></div>;
}

function About() {
  return <div className="page"><h2>About Page - Coming Soon</h2></div>;
}

export default App;