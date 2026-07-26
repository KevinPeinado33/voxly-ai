import type { LucideIcon } from 'lucide-react-native';
import { Pressable, type PressableProps } from 'react-native';

import { iconButtonVariants, type IconButtonVariant } from './iconButtonVariants';

interface IconButtonBaseProps extends Omit<PressableProps, 'children'> {
  icon: LucideIcon;
  variant?: IconButtonVariant;
  size?: number;
  color?: string;
}

export function IconButtonBase({
  icon: Icon,
  size,
  variant = 'primary',
  color,
  ...pressableProps
}: IconButtonBaseProps) {
  const { container, iconColor, iconSize } = iconButtonVariants[variant];

  return (
    <Pressable
      className={`items-center justify-center rounded-full p-3 ${container}`}
      {...pressableProps}
    >
      <Icon size={size ?? iconSize} color={color ?? iconColor} />
    </Pressable>
  );
}
