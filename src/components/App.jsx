import '../styles/App.scss';



import React, { useState, useEffect } from "react";


const PLACEHOLDER_IMAGE = "https://placehold.co/210x295/666666/FFFFFF?text=Sin+Imagen";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters/house/gryffindor")
      .then((res) => res.json())
      .then((data) => setCharacters(data))
      .catch((err) => console.error("Error al obtener personajes:", err));
  }, []);

  return (
    <div className="container">
      <h1>Personajes de Harry Potter</h1>

      <div className="filters">
        <input type="text" placeholder="Buscar por nombre..." disabled />
        <select disabled>
          <option>Gryffindor</option>
          <option>Slytherin</option>
          <option>Hufflepuff</option>
          <option>Ravenclaw</option>
        </select>
      </div>

      <div className="card-grid">
        {characters.map((char) => (
          <div key={char.name} className="card">
            <img
              src={char.image || PLACEHOLDER_IMAGE}
              alt={char.name}
              className="character-image"
            />
            <h2>{char.name}</h2>
            <p>{char.species}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;


