import React, { useState } from "react";
import styles from "./PokemonGrid.module.scss";
import { PokemonGridProps } from "../../utils/types";

const PokemonGrid: React.FC<PokemonGridProps> = ({ data, onPokemonClick }) => {
  const [imageLoadError, setImageLoadError] = useState<{ [key: string]: boolean }>({});

  const handleImageError = (pokemonName: string) => {
    setImageLoadError((prevState) => ({ ...prevState, [pokemonName]: true }));
  };

  const pokemonCards = data.results.map((pokemon) => (
    <div
      key={pokemon.name}
      className={styles["pokemon-card-container"]}
      onClick={() => onPokemonClick(pokemon)}
    >
      <div className={styles["pokemon-card"]}>
        {imageLoadError[pokemon.name] ? (
          <div className={styles["image-not-found"]}>
            <p>Image not found</p>
          </div>
        ) : (
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split(
              "/"
            )[6]}.png`}
            alt={pokemon.name}
            onError={() => handleImageError(pokemon.name)}
          />
        )}
        <p>{pokemon.name}</p>
      </div>
    </div>
  ));

  return <div className={styles["pokemon-grid"]}>{pokemonCards}</div>;
};

export default PokemonGrid;
