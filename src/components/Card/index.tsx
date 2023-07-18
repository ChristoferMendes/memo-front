import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  Image,
  Text,
  VStack,
  View,
  IconButton as NativeBaseIconButton,
  IIconProps,
  HStack,
  Pressable,
} from 'native-base';
import { Poppins_600SemiBold } from 'src/constants/Fonts';

interface CardProps {
  label: string;
  uri: string;
  onPress: (uri: string) => void;
  children: React.ReactNode;
}

function Main({ label, uri, onPress, children }: CardProps) {
  return (
    <VStack mx="10" space="2">
      <Text color="white" textAlign="center" fontSize="md" fontFamily={Poppins_600SemiBold}>
        {label.toUpperCase()}
      </Text>
      <Pressable onPress={() => onPress(uri)}>
        <Image source={{ uri }} alt={label} w="full" h="24" borderBottomRightRadius={75} />
      </Pressable>
      <View position="absolute" top="9" right="4">
        <HStack space="2">{children}</HStack>
      </View>
    </VStack>
  );
}

type IconProps = {
  iconName: keyof typeof MaterialCommunityIcons.glyphMap;
  _icon?: IIconProps;
};

function IconButton({ iconName, _icon }: IconProps) {
  const { name, size, color, ...restProps } = _icon ?? {};

  return (
    <NativeBaseIconButton
      bg="dark.100"
      size={8}
      rounded="full"
      icon={<MaterialCommunityIcons name={iconName} size={22} color="white" {...restProps} />}
    />
  );
}

export const Card = Object.assign(Main, { IconButton });
