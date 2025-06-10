import React from "react";
import { Link } from "react-router-dom";

const PLACEHOLDER_IMAGE = "https://placehold.co/210x295/666666/FFFFFF?text=Sin+Imagen";

function CharacterCard({ character }) {
  const image =
    character.image && character.image.trim() !== ""
      ? character.image
      : PLACEHOLDER_IMAGE;

  return (
    <Link to={`/character/${encodeURIComponent(character.name)}`} className="card">
      <img className="character-image" src={image} alt={character.name} />
      <h2>{character.name}</h2>
      <p>{character.species}</p>
    </Link>
  );
}

export default CharacterCard;
