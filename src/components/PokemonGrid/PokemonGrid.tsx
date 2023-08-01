import React from "react";
import styles from "./PokemonGrid.module.scss";
import { PokemonGridProps } from "../../utils/types";

const PokemonGrid: React.FC<PokemonGridProps> = ({ data, onPokemonClick }) => {
  const pokemonCards = data.results.map((pokemon) => (
    <div
      key={pokemon.name}
      className={styles["pokemon-card-container"]}
      onClick={() => onPokemonClick(pokemon)}
    >
      <div className={styles["pokemon-card"]}>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            pokemon.url.split("/")[6]
          }.png`}
          alt={pokemon.name}
        />
        <p>{pokemon.name}</p>
      </div>
    </div>
  ));

  return <div className={styles["pokemon-grid"]}>{pokemonCards}</div>;
};

export default PokemonGrid;
