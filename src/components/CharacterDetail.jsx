import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const PLACEHOLDER_IMAGE = "https://placehold.co/210x295/666666/FFFFFF?text=Sin+Imagen";

function CharacterDetail() {
  const { characterName } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchAll = async () => {
      const houses = ["gryffindor", "slytherin", "ravenclaw", "hufflepuff"];
      let found = null;

      for (const house of houses) {
        const res = await fetch(`https://hp-api.onrender.com/api/characters/house/${house}`);
        const data = await res.json();
        found = data.find((char) => char.name === characterName);
        if (found) break;
      }

      setCharacter(found);
    };

    fetchAll();
  }, [characterName]);

  if (!character) return <p>Cargando personaje...</p>;

  const image =
    character.image && character.image.trim() !== ""
      ? character.image
      : PLACEHOLDER_IMAGE;

  return (
    <div className="container">
      <Link to="/">← Volver</Link>
      <div className="card">
        <img className="character-image" src={image} alt={character.name} />
        <h2>{character.name}</h2>
        <p><strong>Casa:</strong> {character.house || "Desconocida"}</p>
        <p><strong>Estado:</strong> {character.alive ? "Vivo" : "Muerto"}</p>
        <p><strong>Género:</strong> {character.gender}</p>
        <p><strong>Especie:</strong> {character.species}</p>
        {character.alternate_names?.length > 0 && (
          <p><strong>Alias:</strong> {character.alternate_names.join(", ")}</p>
        )}
      </div>
    </div>
  );
}

export default CharacterDetail;
