import { Button, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LoginScreen() {
  return (
    <SafeAreaView edges={['top', 'bottom']}>
      <Text className='text-2xl font-bold text-red-500'>LoginScreen</Text>
      <Button title="Login" onPress={() => console.log('Login button pressed')} />
    </SafeAreaView>
  )
}
