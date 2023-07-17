import { BackButton } from '@components/BackButton';
import { BoxForBottomIcon } from '@components/BoxForBottomIcon';
import { Card } from '@components/Card';
import { MainBackground } from '@components/MainBackground';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import { HStack, Image, Modal, VStack, View, useToast } from 'native-base';
import { useState } from 'react';

const cards = [
  {
    label: 'Your ID',
    uri: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/New_Estonian_ID_card_%282021%29%28front%29.jpg',
  },
  {
    label: 'Your Passport',
    uri: 'https://www.teclasap.com.br/wp-content/uploads/2020/03/passport.jpg',
  },
];

export default function Documents() {
  const [currentDocumentOnFullScreen, setCurrentDocumentOnFUllScreen] = useState<string | null>(
    null
  );
  const toast = useToast();

  const onCardPress = async (link: string) => {
    const uri = await getUriToBeShared(link);

    const canBeUsed = await Sharing.isAvailableAsync();

    if (!canBeUsed) return toast.show({ title: 'Cannot share this file' });

    await Sharing.shareAsync(uri);
  };

  async function getUriToBeShared(link: string) {
    const fileUri = FileSystem.documentDirectory + 'sharing.png';

    const { uri } = await FileSystem.downloadAsync(link, fileUri);

    return uri;
  }

  const onFullScreenDocumentPress = (uri: string) => {
    setCurrentDocumentOnFUllScreen(uri);
  };

  return (
    <View flex={1} bgColor="#1C1C1C">
      <MainBackground link="https://i.etsystatic.com/34570961/r/il/5db996/4530915483/il_1080xN.4530915483_rbep.jpg" />
      <VStack space="8" mt="8">
        {cards.map((card) => (
          <Card key={card.label} {...card} onPress={() => {}}>
            <Card.IconButton
              iconName="arrow-expand"
              _icon={{ onPress: () => onFullScreenDocumentPress(card.uri) }}
            />
            <Card.IconButton
              iconName="share-variant"
              _icon={{ onPress: () => onCardPress(card.uri) }}
            />
          </Card>
        ))}
      </VStack>
      {currentDocumentOnFullScreen && (
        <Modal isOpen onClose={() => setCurrentDocumentOnFUllScreen(null)}>
          <HStack position="absolute" w="full" h="full" alignItems="center" justifyContent="center">
            <Image
              source={{ uri: currentDocumentOnFullScreen }}
              alt="a"
              size={96}
              resizeMode="contain"
            />
          </HStack>
        </Modal>
      )}
      <BoxForBottomIcon>
        <BackButton />
      </BoxForBottomIcon>
    </View>
  );
}
