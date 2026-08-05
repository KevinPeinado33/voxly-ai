
import type { LucideIcon } from 'lucide-react-native';
import { Pressable, Text, type PressableProps } from 'react-native';

import { chipVariants } from './chipVariants';


type ChipVariant = keyof typeof chipVariants;

interface ChipBaseProps extends Omit<PressableProps, 'children'> {
    label: string;
    icon?: LucideIcon;
    variant?: ChipVariant;
}

const ICON_SIZE = 16;

export function ChipBase({
    label,
    icon: Icon,
    variant = 'default',
    ...pressableProps
}: ChipBaseProps) {
    const { container, text, iconColor } = chipVariants[variant];

    return (
        <Pressable
            className={`flex-row items-center justify-center gap-1.5 rounded-full px-3 py-1.5 ${container}`}
            {...pressableProps}
        >
            {Icon ? <Icon size={ICON_SIZE} color={iconColor} /> : null}
            <Text className={`font-jakarta-regular text-xs ${text}`}>{label}</Text>
        </Pressable>
    );
}