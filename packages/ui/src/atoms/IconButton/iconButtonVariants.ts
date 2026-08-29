export type IconButtonVariant = 'primary' | 'secondary';

interface IconButtonVariantStyle {
  container: string;
  iconColor: string;
  iconSize: number;
}

export const iconButtonVariants: Record<IconButtonVariant, IconButtonVariantStyle> = {
  primary: {
    container: 'bg-purple-500 active:bg-purple-600',
    iconColor: '#ffffff',
    iconSize: 20,
  },
  secondary: {
    container: 'bg-white active:bg-red-50',
    iconColor: '#ef4444',
    iconSize: 20,
  },
};
