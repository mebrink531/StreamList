import React, { useState, useEffect } from "react";

function StreamList() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("streamItems");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("streamItems", JSON.stringify(items));
  }, [items]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const newItem = { text: input, id: Date.now(), completed: false };
    setItems([...items, newItem]);
    setInput("");
  };

  const handleComplete = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  const handleDelete = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleEdit = (id, newText) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, text: newText } : item
    ));
  };

  return (
    <div className="streamlist">
      <h2>My StreamList</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a show or movie"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {items.map(item => (
          <li key={item.id} className={item.completed ? "completed" : ""}>
            <input
              value={item.text}
              onChange={(e) => handleEdit(item.id, e.target.value)}
            />
            <button onClick={() => handleComplete(item.id)}>✔</button>
            <button onClick={() => handleDelete(item.id)}>🗑</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StreamList;