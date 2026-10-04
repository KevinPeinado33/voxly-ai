import './global.css';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { getProducts } from '@/features/example/get-product';
import { useEffect, useState } from 'react';
import { Product } from '@/features/example/products';
import { Text } from 'react-native';

export default function App() {
  const [products, setProducts] = useState<Product[]>([]);

  const [loaded] = useFonts({
    'Sora-Regular': require('./assets/fonts/Sora/Sora-Regular.ttf'),
    'Sora-Medium': require('./assets/fonts/Sora/Sora-Medium.ttf'),
    'Sora-SemiBold': require('./assets/fonts/Sora/Sora-SemiBold.ttf'),
    'Sora-Bold': require('./assets/fonts/Sora/Sora-Bold.ttf'),
    'PlusJakartaSans-Regular': require('./assets/fonts/PlusJakartaSans/PlusJakartaSans-Regular.ttf'),
    'PlusJakartaSans-Medium': require('./assets/fonts/PlusJakartaSans/PlusJakartaSans-Medium.ttf'),
    'PlusJakartaSans-SemiBold': require('./assets/fonts/PlusJakartaSans/PlusJakartaSans-SemiBold.ttf'),
    'PlusJakartaSans-Bold': require('./assets/fonts/PlusJakartaSans/PlusJakartaSans-Bold.ttf'),
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await getProducts();
    setProducts(response);
  };

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView>

        <Text>Hola Mundo</Text>
        {products.map(product => (
          <Text key={product.id}> {product.title} </Text>
        ))}
      </SafeAreaView>


    </SafeAreaProvider>
  );
}
