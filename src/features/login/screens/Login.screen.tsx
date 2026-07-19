import { Button, Text, View } from 'react-native';
import { SafeAreaView, useSafeAreaFrame, useSafeAreaInsets } from 'react-native-safe-area-context';

export default function LoginScreen() {
  const { top } = useSafeAreaInsets()

  return (
    <View style={{ paddingTop: top }} >
      <Text>LoginScreen</Text>
      <Button title="Login" onPress={() => console.log('Login button pressed')} />
    </View>
  )
}
