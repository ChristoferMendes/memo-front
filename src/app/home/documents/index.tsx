import { BackButton } from '@components/BackButton';
import { BoxForBottomIcon } from '@components/BoxForBottomIcon';
import { Card } from '@components/Card';
import { MainBackground } from '@components/MainBackground';
import { Href, useRouter } from 'expo-router';
import { VStack, View } from 'native-base';

const cards = [
  {
    href: '/' as const,
    label: 'Your ID',
    uri: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/New_Estonian_ID_card_%282021%29%28front%29.jpg',
  },
  {
    href: '/' as const,
    label: 'Your Passport',
    uri: 'https://www.teclasap.com.br/wp-content/uploads/2020/03/passport.jpg',
  },
];

export default function Documents() {
  const router = useRouter();

  const onCardPress = (href: Href<''>) => {
    router.push(href);
  };

  return (
    <View flex={1} bgColor="#1C1C1C">
      <MainBackground link="https://i.etsystatic.com/34570961/r/il/5db996/4530915483/il_1080xN.4530915483_rbep.jpg" />
      <VStack space="8" mt="8">
        {cards.map((card) => (
          <Card key={card.label} {...card} onPress={onCardPress} />
        ))}
      </VStack>
      <BoxForBottomIcon>
        <BackButton />
      </BoxForBottomIcon>
    </View>
  );
}
