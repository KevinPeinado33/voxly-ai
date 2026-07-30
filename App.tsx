import './global.css';
import LoginScreen from './src/features/login/screens/Login.screen';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { Bell, ChevronLeft, Mail, MailOpen, Mic, Pencil } from 'lucide-react-native';
/* import { IconButtonBase } from './src/shared/components/atoms/Buttons/IconButtonBase'; */
import { InputBase } from './src/shared/components/atoms/Inputs/InputBase';

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
      {/* <SafeAreaView className="flex-1 flex-row items-center justify-center gap-">
        <IconButtonBase icon={Mic} variant="primary" />
        <IconButtonBase icon={ChevronLeft} variant="secondary" />
        <IconButtonBase icon={Bell} variant="secondary" />
        <IconButtonBase icon={Pencil} variant="secondary" />
      </SafeAreaView> */}
      <SafeAreaView className="flex-1 items-center justify-center gap-4">
        <InputBase placeholder={'Email address'} icon={Mail} />
      </SafeAreaView>


    </SafeAreaProvider>
  );
}
