interface Ability {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
}

interface Type {
  type: {
    name: string;
  };
}

interface Stat {
  base_stat: number;
  stat: {
    name: string;
  };
}

interface Move {
  move: {
    name: string;
  };
}

export interface IPokemon {
  id: number;
  name: string;
  picture: string;
  abilities: Ability[];
  types: Type[];
  order: number;
  stats: Stat[];
  species: string;
  moves: Move[];
}

export interface IPokemonUrl {
  name: string;
  url: string;
}

export interface IEvolutionItem {
  pokemon: IPokemon;
  minLevel: number | null;
}

export interface ParamTypes {
  pokemonId: string;
}
