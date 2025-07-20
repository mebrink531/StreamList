import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import StreamList from "./StreamList";
import Movies from "./Movies";
import Cart from "./Cart";
import About from "./About";
import TMDB from "./TMDB";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <nav>
          <h1>🎬 StreamList</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/movies">Movies</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/tmdb">TMDB</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<StreamList />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/tmdb" element={<TMDB />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;