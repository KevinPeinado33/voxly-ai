import Axios from 'axios';
import { PokemonApi } from './contracts/pokemons-api.contract';
import { Pokemon } from '../models/pokemon.model';
import { pokemonMapper } from './mappers/pokemon.mapper';

export async function getPokemons(): Promise<Pokemon[]> {

  const url = 'https://pokeapi.co/api/v2/pokemon';

  const response = await Axios.get<PokemonApi>(url);

  return pokemonMapper.toModels(response.data.results);

}
