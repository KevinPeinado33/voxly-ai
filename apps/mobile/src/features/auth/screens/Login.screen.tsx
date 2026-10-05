import { PokemonResponse } from '@/features/example/services/contracts/pokemons-api.contract';
import { getPokemons } from '@/features/example/services/get-pokemons.service';
import { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Pokemon } from '../components/Pokemon';
import { Pokemon as PokemonModel } from '@/features/example/models/pokemon.model';
import { ProductsAPI } from '@/features/example/products';
import { getProducts } from '@/features/example/get-product';

export default function LoginScreen() {
  const { top } = useSafeAreaInsets();
  const [infoProducts, setInfoProducts] = useState<ProductsAPI>();


  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await getProducts();
    setInfoProducts(response);
  };
  const [pokemons, setPokemons] = useState<PokemonModel[]>([]);

  useEffect(() => {
    const loadPokemons = async () => {
      const responseApi = await getPokemons();
      setPokemons(responseApi);
    };

    loadPokemons();
  }, []);

  return (
    <ScrollView>
      <SafeAreaView>
        <Text>Total de productos</Text>
        {infoProducts?.products?.map(product => (
          <Text key={product.id}> {product.title} </Text>
        ))}
        <Text>Total: {infoProducts?.total}</Text>
        <View style={{ paddingTop: top }}>
          <Text className='text-2xl text-center font-bold text-blue-500'>Llamada de pokemones</Text>
          {pokemons.map((pokemon) => (
            <Pokemon key={pokemon.name} pokemon={pokemon} />
          ))}
        </View>


      </SafeAreaView>
    </ScrollView>
  )







}
