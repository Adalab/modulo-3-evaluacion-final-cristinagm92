import React from "react";

function Filter({ search, onSearchChange, house, onHouseChange }) {
  return (
    <form
      className="filters"
      onSubmit={(e) => {
        e.preventDefault(); // evita que recargue la página
      }}
    >
      <input
        type="text"
        placeholder="Buscar por nombre..."
        value={search}
        onChange={onSearchChange}
      />

      <select value={house} onChange={onHouseChange}>
        {["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"].map((h) => (
          <option key={h} value={h}>
            {h}
          </option>
        ))}
      </select>
      <button type="button" onClick={() => {
  onSearchChange({ target: { value: "" } });
  onHouseChange({ target: { value: "Gryffindor" } });
}}>
  Resetear filtros
</button>

    </form>
  );
}

export default Filter;
