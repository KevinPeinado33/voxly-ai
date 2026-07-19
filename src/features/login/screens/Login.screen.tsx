import { Button, Text, View } from 'react-native';
import { SafeAreaView, useSafeAreaFrame, useSafeAreaInsets } from 'react-native-safe-area-context';

export default function LoginScreen() {
  const { top } = useSafeAreaInsets()

  return (
    <SafeAreaView edges={['top', 'bottom']}>
      <Text className='text-2xl font-bold text-red-500'>LoginScreen</Text>
      <Button title="Login" onPress={() => console.log('Login button pressed')} />
    </View>
  )
}
