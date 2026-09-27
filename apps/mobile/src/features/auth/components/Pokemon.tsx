import { Pokemon as PokemonModel } from '@/features/example/models/pokemon.model';
import { Text } from 'react-native';

interface PokemonProps {
  pokemon: PokemonModel;
}
export function Pokemon({ pokemon }: PokemonProps) {
  return (
    <Text className='text-center text-lg text-gray-700'>
      {pokemon.name}
    </Text>
  )
}
