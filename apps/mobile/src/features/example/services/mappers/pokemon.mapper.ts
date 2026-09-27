import { Pokemon } from "../../models/pokemon.model";
import { PokemonResponse } from "../contracts/pokemons-api.contract";

export const pokemonMapper = {
  toModel,
  toModels,
}

function toModels(values: PokemonResponse[]): Pokemon[] {
  return values.map(toModel);
}

function toModel(value: PokemonResponse): Pokemon {
  return {
    name: value.name,
    url: value.url,
  }
}
