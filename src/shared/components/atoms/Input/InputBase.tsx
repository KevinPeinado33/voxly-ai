import { useState } from 'react';
import { Text, TextInput, View, type TextInputProps } from 'react-native';

// Extendemos TextInputProps para heredar value, onChangeText, secureTextEntry,
// keyboardType, etc. Solo agregamos "label" nuestro.
interface InputBaseProps extends Omit<TextInputProps, 'className'> {
    label?: string;
}

export function InputBase({ label, ...textInputProps }: InputBaseProps) {
    // Estado local para el borde: patrón evento -> estado -> re-render (sección 2 de tu guía)
    const [isFocused, setIsFocused] = useState(false);

    return (
        <View className="gap-2">
            {label ? (
                <Text className="font-jakarta-medium text-sm text-gray-700">{label}</Text>
            ) : null}

            <TextInput
                className={`rounded-2xl border px-4 py-4 font-jakarta-regular text-base text-gray-900 ${isFocused ? 'border-purple-500' : 'border-gray-200'
                    }`}
                placeholderTextColor="#9ca3af"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                {...textInputProps}
            />
        </View>
    );
}