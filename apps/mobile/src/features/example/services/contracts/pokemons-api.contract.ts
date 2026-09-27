export interface PokemonApi {
  count: number;
  next: string;
  previous: null;
  results: PokemonResponse[];
}

export interface PokemonResponse {
  nameRunrun: string;
  url: string;
}
