import { IEvolutionItem, IPokemonUrl } from "../types/types";
import axios, { AxiosError, AxiosResponse } from "axios";

export const fetchAllPokemon = async (
  offset: number,
  limit: number
): Promise<IPokemonUrl[]> => {
  const url: string = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

  return axios
    .get(url)
    .then((response: AxiosResponse) => response.data.results)
    .catch((error: AxiosError) => console.error(error));
};

export const fetchPokemon = async (url: string): Promise<any> => {
  return axios
    .get(url)
    .then((response: AxiosResponse) => response.data)
    .then((data) => ({
      id: data.id,
      name: data.name,
      picture: data.sprites.other["official-artwork"].front_default,
      abilities: data.abilities,
      types: data.types,
      order: data.order,
      stats: data.stats,
      moves: data.moves,
      species: data.species.url, //required to get possible evolutions
    }))
    .catch((error: AxiosError) => console.error(error));
};

export const fetchEvolutionChain = async (url: string): Promise<any> => {
  const evolutionChain: IEvolutionItem[] = [];

  try {
    const species: AxiosResponse = await axios(url);
    const speciesData = species.data;

    const evolutionChainUrl = speciesData.evolution_chain;
    const response: AxiosResponse = await axios(evolutionChainUrl);
    var evolutionChainData = response.data.chain;

    do {
      var evolutionDetails = evolutionChainData.evolution_details[0];

      //fetch picture
      const pokemon: AxiosResponse = await axios(
        evolutionChainData.species.url
      );
      const data = pokemon.data;

      const pokemonData = await fetchPokemon(
        `https://pokeapi.co/api/v2/pokemon/${data.id}/`
      );

      evolutionChain.push({
        pokemon: pokemonData,
        minLevel: !evolutionDetails ? null : evolutionDetails.min_level,
      });

      evolutionChainData = evolutionChainData.evolves_to[0];
    } while (
      !!evolutionChainData &&
      evolutionChainData.hasOwnProperty("evolves_to")
    );

    return evolutionChain;
  } catch (error) {
    console.error(error);
  }
};
