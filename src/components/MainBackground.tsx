import { Image } from 'native-base';

interface MainBackgroundProps {
  link: string;
}

export function MainBackground({ link }: MainBackgroundProps) {
  return (
    <Image
      bgColor="red.600"
      w="full"
      h="43%"
      borderBottomLeftRadius={60}
      borderBottomRightRadius={60}
      source={{
        uri: link,
      }}
      alt="Ukiyo-e"
    />
  );
}
