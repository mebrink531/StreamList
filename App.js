import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { FaHome, FaFilm, FaShoppingCart, FaInfoCircle, FaEdit, FaTrash, FaCheck } from 'react-icons/fa';

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
  const [streams, setStreams] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!streamInput.trim()) return;

    if (editIndex !== null) {
      const updated = [...streams];
      updated[editIndex].text = streamInput;
      setStreams(updated);
      setEditIndex(null);
    } else {
      setStreams([...streams, { text: streamInput, completed: false }]);
    }

    setStreamInput('');
  };

  const handleDelete = (index) => {
    setStreams(streams.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setStreamInput(streams[index].text);
    setEditIndex(index);
  };

  const handleComplete = (index) => {
    const updated = [...streams];
    updated[index].completed = !updated[index].completed;
    setStreams(updated);
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
        <button type="submit">{editIndex !== null ? 'Update' : 'Submit'}</button>
      </form>

      <ul className="stream-list">
        {streams.map((item, index) => (
          <li key={index} className={item.completed ? 'completed' : ''}>
            {item.text}
            <div className="actions">
              <button onClick={() => handleEdit(index)}><FaEdit /></button>
              <button onClick={() => handleDelete(index)}><FaTrash /></button>
              <button onClick={() => handleComplete(index)}><FaCheck /></button>
            </div>
          </li>
        ))}
      </ul>
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
