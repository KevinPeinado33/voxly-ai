import { StyleSheet } from 'react-native';
import LoginScreen from './src/features/login/screens/Login.screen';

export default function App() {
  return <LoginScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
