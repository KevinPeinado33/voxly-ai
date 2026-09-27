import { PokemonResponse } from '@/features/example/services/contracts/pokemons-api.contract';
import { getPokemons } from '@/features/example/services/get-pokemons.service';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Pokemon } from '../components/Pokemon';
import { Pokemon as PokemonModel } from '@/features/example/models/pokemon.model';

export default function LoginScreen() {
  const { top } = useSafeAreaInsets();
  const [pokemons, setPokemons] = useState<PokemonModel[]>([]);

  useEffect(() => {
    const loadPokemons = async () => {
    const responseApi = await getPokemons();
      setPokemons(responseApi);
    };

    loadPokemons();
  }, []);

  return (
    <View style={{ paddingTop: top }}>
      <Text className='text-2xl text-center font-bold text-blue-500'>Llamada de pokemonses</Text>
      {pokemons.map((pokemon) => (
        <Pokemon key={pokemon.name} pokemon={pokemon} />
      ))}
    </View>
  );
}
