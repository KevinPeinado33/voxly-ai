import { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getUsers, type UserModel } from '@voxly/core';

export default function LoginScreen() {
  const { top } = useSafeAreaInsets();

  const [users, setUsers] = useState<UserModel[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getUsers()
      .then(setUsers)
      .catch((err: Error) => setError(err.message));
  }, []);

  return (
    <View style={{ paddingTop: top }}>
      <Text className='text-2xl font-bold text-red-500'>LoginScreen</Text>
      {error ? (
        <Text>{error}</Text>
      ) : (
        <Text>{JSON.stringify(users, null, 2)}</Text>
      )}
      <Button title="Login" onPress={() => console.log('Login button pressed')} />
    </View>
  );
}
