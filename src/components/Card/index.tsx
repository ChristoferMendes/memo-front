import { Href } from 'expo-router';
import { Image, Text, VStack } from 'native-base';
import { Poppins_600SemiBold } from 'src/constants/Fonts';

interface CardProps {
  label: string;
  uri: string;
  href: Href<''>;
  onPress: (href: Href<''>) => void;
}

export function Card({ label, uri, href, onPress }: CardProps) {
  return (
    <VStack mx="10" space="2" onTouchStart={() => onPress(href)}>
      <Text color="white" textAlign="center" fontSize="md" fontFamily={Poppins_600SemiBold}>
        {label.toUpperCase()}
      </Text>
      <Image source={{ uri }} alt={label} w="full" h="24" borderBottomRightRadius={75} />
    </VStack>
  );
}
