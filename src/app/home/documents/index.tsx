import { BoxForBottomIcon } from '@components/BoxForBottomIcon';
import { Card } from '@components/Card';
import { DocumentCamera } from '@components/DocumentCamera';
import { DocumentImageExpanded } from '@components/DocumentImageExpanded';
import { MainBackground } from '@components/MainBackground';
import { AntDesign } from '@expo/vector-icons';
import { useCreateDocumentOnPhotoTaken } from '@hooks/useCreateDocumentOnPhotoTaken';
import { useDocuments } from '@hooks/useDocuments';
import { useShareLink } from '@hooks/useShareLink';
import { FlashList } from '@shopify/flash-list';
import { useCurrentDocumentOnFullScreen } from '@store/useCurrentDocumentOnFullScreen';
import { useDocumentCameraIsOpen } from '@store/useDocumentCameraIsOpen';
import { IconButton, View } from 'native-base';

export default function Documents() {
  const { setCurrentDocumentOnFullScreen } = useCurrentDocumentOnFullScreen();
  const { setDocumentCameraIsOpen } = useDocumentCameraIsOpen();
  const { onShare } = useShareLink();
  const { documents } = useDocuments();
  useCreateDocumentOnPhotoTaken();

  function onOpenCamera() {
    setDocumentCameraIsOpen(true);
  }

  return (
    <View flex={1} bgColor="#1C1C1C">
      <MainBackground link="https://i.etsystatic.com/34570961/r/il/5db996/4530915483/il_1080xN.4530915483_rbep.jpg" />
      <FlashList
        estimatedItemSize={96}
        data={documents?.documentsByUser}
        contentContainerStyle={{ paddingBottom: 100 }}
        renderItem={({ item: document }) => (
          <Card key={document.id} label="" uri={document.image_url} onPress={() => {}}>
            <Card.IconButton
              iconName="arrow-expand"
              _icon={{ onPress: () => setCurrentDocumentOnFullScreen(document.image_url) }}
            />
            <Card.IconButton
              iconName="share-variant"
              _icon={{ onPress: () => onShare(document.image_url) }}
            />
          </Card>
        )}
      />
      <DocumentCamera />
      <DocumentImageExpanded />
      <BoxForBottomIcon>
        <IconButton
          bgColor="green.600"
          rounded="full"
          onPress={onOpenCamera}
          alignSelf="center"
          _pressed={{
            bg: 'primary-green',
          }}
          icon={<AntDesign name="plus" color="white" size={24} />}
        />
      </BoxForBottomIcon>
    </View>
  );
}
