import '../styles/App.scss';

import React from "react";


function App() {
  return (
    <div className="container">
      <h1>Personajes de Harry Potter</h1>

      <div className="filters">
        <input type="text" placeholder="Buscar por nombre..." />
        <select>
          <option>Gryffindor</option>
          <option>Slytherin</option>
          <option>Hufflepuff</option>
          <option>Ravenclaw</option>
        </select>
      </div>

      <div className="card-grid">
        {/* cromos de personajes */}
      </div>
    </div>
  );
}

export default App;

