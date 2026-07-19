import { Button, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function LoginScreen() {
  const { top } = useSafeAreaInsets()

  return ( 
    <View style={{paddingTop: top }}>
      <Text className='text-2xl font-bold text-red-500'>LoginScreen</Text>
      <Button title="Login" onPress={() => console.log('Login button pressed')} />
    </View>
  )
}
