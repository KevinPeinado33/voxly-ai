export type InputVariant = 'default';


interface InputVariantStyle {
  container: string;
  input: string;
  iconColor?: string;
  borderColor: string;
  borderColorFocused: string;
}

export const inputVariants: Record<InputVariant, InputVariantStyle> = {

  default: {
    container: 'flex-row bg-gray-300 py-4 px-5 border rounded-full gap-2',
    borderColor: 'border-gray-900',
    borderColorFocused: 'border-purple-500',
    input: 'flex-1 text-base text-gray-900',
    iconColor: '#100000',
  },

}

