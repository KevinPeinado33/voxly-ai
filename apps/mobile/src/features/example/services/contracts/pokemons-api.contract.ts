export interface PokemonApi {
  count: number;
  next: string;
  previous: null;
  results: PokemonResponse[];
}

export interface PokemonResponse {
  name: string;
  nameRunrun: string;
  url: string;
}
