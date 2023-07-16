import { AntDesign } from '@expo/vector-icons';
import { IconProps } from '@expo/vector-icons/build/createIconSet';
import { useRouter } from 'expo-router';

export function BackButton(props: Partial<IconProps<''>>) {
  const router = useRouter();
  const { name, size, color, onPress, ...rest } = props;

  const onBackPress = () => {
    router.push('../');
  };

  return (
    <AntDesign
      name="caretleft"
      size={32}
      color="white"
      {...rest}
      onPress={onPress ?? onBackPress}
    />
  );
}
