const PokemonDetails = ({ pokemon }) => {
  return (
    <div className="pokemon-details">
      {pokemon ? (
        <>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.imageUrl} alt={pokemon.name} />
          <p>Type: {pokemon.type}</p>
        </>
      ) : (
        <p>Please select a pokemon from the grid.</p>
      )}
    </div>
  );
};

export default PokemonDetails;
