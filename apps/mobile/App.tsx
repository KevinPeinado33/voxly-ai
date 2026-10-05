import './global.css';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { getProducts } from '@/features/example/get-product';
import { useEffect, useState } from 'react';
import { Product, ProductsAPI } from '@/features/example/products';
import { Button, ScrollView, Text } from 'react-native';
import LoginScreen from '@/features/auth/screens/Login.screen';
import { getPosts } from '@/features/example/get-posts';
import { PostsAPI } from '@/features/example/posts';
import { CommentsAPI } from '@/features/comments';
import { getComments } from '@/features/get-comments';

export default function App() {
  const [infoProducts, setInfoProducts] = useState<ProductsAPI>();
  const [posts, setPosts] = useState<PostsAPI[]>([]);
  const [showLogin, setShowLogin] = useState(false);
  const [comments, setComments] = useState<CommentsAPI[]>([]);

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

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    fetchComments();
  }, []);


  const fetchProducts = async () => {
    const response = await getProducts();
    setInfoProducts(response);
  };

  const fetchPosts = async () => {
    const response = await getPosts();
    setPosts(response);

  };

  const fetchComments = async () => {
    const response = await getComments();
    setComments(response);
  };


  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      {showLogin ? (
        <>
          <SafeAreaView edges={['top']}>
            <Button title="Volver" onPress={() => setShowLogin(false)} />
          </SafeAreaView>
          <LoginScreen />
        </>
      ) : (
        <ScrollView>


          <SafeAreaView>
            <Text>Total de productos</Text>
            {infoProducts?.products?.map(product => (
              <Text key={product.id}> {product.title} </Text>
            ))}
            <Text>Total: {infoProducts?.total}</Text>
          </SafeAreaView>

          <Button title="Ir a Login" onPress={() => setShowLogin(true)} />

          <SafeAreaView>
            <Text>Total de comentarios</Text>
            {comments.map(comment => (<Text key={comment.id}>{comment.body}</Text>))}
          </SafeAreaView>

          <SafeAreaView>
            <Text>Total de publicaciones</Text>
            {posts.map(post => (
              <Text key={post.id}> {post.title}</Text>
            ))}

          </SafeAreaView>

        </ScrollView>
      )}
    </SafeAreaProvider>
  );
}
