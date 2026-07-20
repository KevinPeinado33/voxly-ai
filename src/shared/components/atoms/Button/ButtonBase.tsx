import type { LucideIcon } from 'lucide-react-native';
import { Pressable, Text, type PressableProps } from 'react-native';

import { buttonVariants, type ButtonVariant } from './buttonVariants';

interface ButtonBaseProps extends Omit<PressableProps, 'children'> {
  title: string;
  icon?: LucideIcon;
  variant?: ButtonVariant;
}

const ICON_SIZE = 20;

export function ButtonBase({
  title,
  icon: Icon,
  variant = 'primary',
  ...pressableProps
}: ButtonBaseProps) {
  const { container, text, iconColor } = buttonVariants[variant];

  return (
    <Pressable
      className={`flex-row items-center justify-center gap-2 rounded-3xl px-4 py-4 ${container}`}
      {...pressableProps}
    >
      {Icon ? <Icon size={ICON_SIZE} color={iconColor} /> : null}
      <Text className={`font-jakarta-regular text-sm ${text}`}>{title}</Text>
    </Pressable>
  );
}
