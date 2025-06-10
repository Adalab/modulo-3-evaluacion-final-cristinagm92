import '../styles/App.scss';

import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Filter from "./Filter.jsx";


function App() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");
  const [house, setHouse] = useState("Gryffindor");

  useEffect(() => {
    const fetchCharacters = async () => {
      const res = await fetch(`https://hp-api.onrender.com/api/characters/house/${house}`);
      const data = await res.json();
      setCharacters(data);
    };
    fetchCharacters();
  }, [house]);

  const filteredCharacters = characters.filter((char) =>
    char.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="container">
            <h1>Personajes de Harry Potter</h1>
            <Filter
              search={search}
              onSearchChange={(e) => setSearch(e.target.value)}
              house={house}
              onHouseChange={(e) => setHouse(e.target.value)}
            />
            <CharacterList characters={filteredCharacters} search={search} />
          </div>
        }
      />
      <Route path="/character/:characterName" element={<CharacterDetail />} />
    </Routes>
  );
}

export default App;