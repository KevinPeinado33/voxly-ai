import type { LucideIcon } from 'lucide-react-native';
import { View, TextInput } from 'react-native';
import { TextInputProps } from 'react-native';
import { inputVariants, type InputVariant } from './inputVariants';
import { useState } from 'react';

interface InputBaseProps extends TextInputProps {
  icon: LucideIcon;
  variant?: InputVariant;
}

export function InputBase({
  icon: Icon, variant = 'default', ...props }: InputBaseProps) {

  const [isfocused, setIsFocused] = useState(false)

  const { container, input, iconColor, borderColor, borderColorFocused } = inputVariants[variant];


  return (

    <View className={`${container} ${isfocused ? borderColorFocused : borderColor}`}>
      {Icon ? <Icon size={20} color={iconColor} /> : null
      }
      <TextInput className={input} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} {...props} />
    </View >



  );


}