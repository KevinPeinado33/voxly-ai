import { Pressable, type PressableProps, Text } from 'react-native';

interface ChipProps extends Omit<PressableProps, 'children'> {
  label: string;
}
export function Chip({ label, ...pressableProps }: ChipProps) {
  return (
    <Pressable className="bg-gray-200 rounded-full px-4 py-2 self-center" {...pressableProps}>
      <Text>{label}</Text>
    </Pressable>
  )
};
