import './global.css';
import LoginScreen from './src/features/login/screens/Login.screen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';

export default function App() {
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

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <LoginScreen />
    </SafeAreaProvider>
  );
}
