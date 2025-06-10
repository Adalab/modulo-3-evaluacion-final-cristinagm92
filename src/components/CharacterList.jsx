import React from "react";
import CharacterCard from "./CharacterCard";

function CharacterList({ characters, search }) {
  if (characters.length === 0) {
    return <p>No hay ningún personaje que coincida con "{search}"</p>;
  }

  return (
    <div className="card-grid">
      {characters.map((char) => (
        <CharacterCard key={char.id} character={char} />
      ))}
    </div>
  );
}

export default CharacterList;
