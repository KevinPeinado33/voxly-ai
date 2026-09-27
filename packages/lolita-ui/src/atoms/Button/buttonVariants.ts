export type ButtonVariant = 'primary' | 'secondary';

interface ButtonVariantStyle {
  container: string;
  text: string;
  iconColor: string;
}

export const buttonVariants: Record<ButtonVariant, ButtonVariantStyle> = {
  primary: {
    container: 'bg-purple-500 active:bg-purple-600',
    text: 'text-white',
    iconColor: '#ffffff',
  },
  secondary: {
    container: 'bg-white active:bg-red-50',
    text: 'text-red-500',
    iconColor: '#ef4444',
  },
};
