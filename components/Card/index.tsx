import { Poppins_600SemiBold } from '@constants/Fonts';
import { Button, Image, Text, VStack } from 'native-base';

interface CardProps {
  label: string;
  uri: string;
  href: string;
  onPress: (href: string) => void;
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
