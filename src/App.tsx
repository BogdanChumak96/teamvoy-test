import React, { useState } from "react";
import { useQuery } from "react-query";
import PokemonGrid from "./components/PokemonGrid/PokemonGrid";
import PokemonDetails from "./components/PokemonDetails/PokemonDetails";
import "./App.css";
import Header from "./components/Header/Header";
import { Pokemon } from "./utils/types";

const App: React.FC = () => {
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;

  const { isLoading, error, data } = useQuery(["pokemons", currentPage], () =>
    fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${pageSize}&offset=${
        (currentPage - 1) * pageSize
      }`
    ).then((res) => res.json())
  );

  const handlePokemonClick = async (pokemon: Pokemon) => {
    const response = await fetch(pokemon.url);
    const pokemonData = await response.json();
    setSelectedPokemon(pokemonData);
  };

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  // Conditional render variables
  const isLoadingData = isLoading ? <div>Loading...</div> : null;
  const isError = error ? <div>Error fetching data</div> : null;
  const isPokemonGrid = data ? (
    <PokemonGrid data={data} onPokemonClick={handlePokemonClick} />
  ) : null;
  
  const isPokemonSelected = selectedPokemon ? (
    <PokemonDetails selectedPokemon={selectedPokemon} />
  ) : (
    <p>Pokemon not selected.</p>
  );

  const isPrevButtonVisible =
    !isLoading && data?.results && currentPage > 1 ? (
      <button className="load-more-button" onClick={handlePrevPage}>
        Prev
      </button>
    ) : null;

  const isLoadMoreButtonVisible =
    !isLoading && data?.results && data.results.length === pageSize ? (
      <button className="load-more-button" onClick={handleLoadMore}>
        Load More
      </button>
    ) : null;

  return (
    <div>
      <Header />
      <div className="container">
        {isLoadingData}
        {isError}
        {isPokemonGrid}
        {isPokemonSelected}
        <div className="load-more-button-container">
          {isPrevButtonVisible}
          {isLoadMoreButtonVisible}
        </div>
      </div>
    </div>
  );
};

export default App;
