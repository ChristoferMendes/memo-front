import { BackButton } from '@components/BackButton';
import { BoxForBottomIcon } from '@components/BoxForBottomIcon';
import { Card } from '@components/Card';
import { DocumentCamera } from '@components/DocumentCamera';
import { DocumentImageExpanded } from '@components/DocumentImageExpanded';
import { MainBackground } from '@components/MainBackground';
import { useCreateDocument } from '@hooks/useCreateDocument';
import { useShareLink } from '@hooks/useShareLink';
import { useCurrentDocumentOnFullScreen } from '@store/useCurrentDocumentOnFullScreen';
import { useDocuments } from '@store/useDocument';
import { useDocumentCameraIsOpen } from '@store/useDocumentCameraIsOpen';
import { CameraCapturedPicture } from 'expo-camera';
import { VStack, View } from 'native-base';

export default function Documents() {
  const { setCurrentDocumentOnFullScreen } = useCurrentDocumentOnFullScreen();
  const { setDocumentCameraIsOpen } = useDocumentCameraIsOpen();
  const {
    documents,
    setCurrentDocumentIdToBeReplaced,
    updateDocumentUriById,
    currentDocumentIdToBeReplaced,
  } = useDocuments();
  const { onShare } = useShareLink();
  const { executeCreateDocumentMutation, data } = useCreateDocument();

  function onPhotoTaken(photo: CameraCapturedPicture) {
    if (!photo.base64) return;

    executeCreateDocumentMutation({
      image_url: photo.base64,
      title: 'Document',
    });
  }

  function onCardPress(documentId: number) {
    setCurrentDocumentIdToBeReplaced(documentId);
    setDocumentCameraIsOpen(true);
  }

  return (
    <View flex={1} bgColor="#1C1C1C">
      <MainBackground link="https://i.etsystatic.com/34570961/r/il/5db996/4530915483/il_1080xN.4530915483_rbep.jpg" />
      <VStack space="8" mt="8">
        {documents.map((document) => (
          <Card key={document.label} {...document} onPress={() => onCardPress(document.id)}>
            <Card.IconButton
              iconName="arrow-expand"
              _icon={{ onPress: () => setCurrentDocumentOnFullScreen(document.uri) }}
            />
            <Card.IconButton
              iconName="share-variant"
              _icon={{ onPress: () => onShare(document.uri) }}
            />
          </Card>
        ))}
      </VStack>
      <DocumentCamera onPhotoTaken={onPhotoTaken} />
      <DocumentImageExpanded />
      <BoxForBottomIcon>
        <BackButton />
      </BoxForBottomIcon>
    </View>
  );
}
