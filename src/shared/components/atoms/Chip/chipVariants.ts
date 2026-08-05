export type ChipVariant = 'default' | 'selected';

interface ChipVariantStyle {
    container: string;
    text: string;
    iconColor: string;
}

export const chipVariants: Record<ChipVariant, ChipVariantStyle> = {
    default: {
        container: 'bg-white active:bg-purple-50',
        text: 'text-purple-500',
        iconColor: '#a855f7',
    },
    selected: {
        container: 'bg-purple-500 active:bg-purple-600',
        text: 'text-white',
        iconColor: '#ffffff',
    },
};