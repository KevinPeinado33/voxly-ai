import { Button, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LoginScreen() {
  return (
    <SafeAreaView edges={['top', 'bottom']}>
      <Text>LoginScreen</Text>
      <Button title="Login" onPress={() => console.log('Login button pressed')} />
    </SafeAreaView>
  )
}
