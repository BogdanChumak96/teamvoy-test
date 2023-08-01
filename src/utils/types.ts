export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonGridProps {
  data: {
    results: Pokemon[];
  };
  onPokemonClick: (pokemon: Pokemon) => void;
}

export interface Stat {
  base_stat: number;
  stat: {
    name: string;
  };
}

export interface Type {
  type: {
    name: string;
  };
}

export interface Move {
  move: {
    name: string;
  };
}

export interface Pokemon {
  id: number;
  name: string;
  types: Type[];
  stats: Stat[];
  weight: number;
  moves: Move[];
}

export interface PokemonDetailsProps {
  selectedPokemon: Pokemon | null;
}
