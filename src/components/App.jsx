import '../styles/App.scss';



import React, { useState, useEffect } from "react";


const PLACEHOLDER_IMAGE = "https://placehold.co/210x295/666666/FFFFFF?text=Sin+Imagen";

const HOUSES = ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"];

function App() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");
  const [house, setHouse] = useState("Gryffindor");

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const res = await fetch(`https://hp-api.onrender.com/api/characters/house/${house}`);
        const data = await res.json();
        setCharacters(data);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchCharacters();
  }, [house]);

  const filteredCharacters = characters.filter((char) =>
    char.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Personajes de Harry Potter</h1>

      <div className="filters">
        <input
          type="text"
          placeholder="Buscar por nombre..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={house} onChange={(e) => setHouse(e.target.value)}>
          {HOUSES.map((houseOption) => (
            <option key={houseOption} value={houseOption}>
              {houseOption}
            </option>
          ))}
        </select>
      </div>

      <div className="card-grid">
        {filteredCharacters.map((char) => (
          <div className="card" key={char.name}>
            <img
              className="character-image"
              src={
                char.image && char.image.trim() !== ""
                  ? char.image
                  : PLACEHOLDER_IMAGE
              }
              alt={char.name}
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