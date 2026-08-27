import { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ButtonBase } from '../../../shared/components/atoms/Button';
import { InputBase } from '../../../shared/components/atoms/Input';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit() {
    console.log({ email, password }); // por ahora solo esto, sin API
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerClassName="flex-grow justify-center gap-8 px-6 py-10"
          keyboardShouldPersistTaps="handled"
        >
          <View className="gap-2">
            <Text className="font-sora-bold text-3xl text-gray-900">
              Bienvenida de nuevo
            </Text>
            <Text className="font-jakarta-regular text-base text-gray-500">
              Inicia sesión para continuar
            </Text>
          </View>

          <View className="gap-4">
            <InputBase
              label="Email"
              placeholder="tu@correo.com"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              keyboardType="email-address"
              autoComplete="email"
            />

            <InputBase
              label="Contraseña"
              placeholder="••••••••"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              autoCapitalize="none"
            />

            {/* Solo texto por ahora, sin navegación */}
            <Text className="self-end font-jakarta-medium text-sm text-gray-500">
              ¿Olvidaste tu contraseña?
            </Text>
          </View>

          <View className="gap-4">
            <ButtonBase title="Iniciar sesión" variant="primary" onPress={handleSubmit} />
          </View>

          <View className="flex-row justify-center gap-1">
            <Text className="font-jakarta-regular text-sm text-gray-500">
              ¿No tienes cuenta?
            </Text>
            <Text className="font-jakarta-semibold text-sm text-purple-600">
              Regístrate
            </Text>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}