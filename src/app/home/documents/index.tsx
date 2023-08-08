import { DocumentCamera } from '@components/DocumentCamera';
import { DocumentImageExpanded } from '@components/DocumentImageExpanded';
import { MainBackground } from '@components/MainBackground';
import { AntDesign } from '@expo/vector-icons';
import { useCameraPermissions } from '@hooks/useCameraPermissions';
import { useCreateDocumentOnPhotoConfirmed } from '@hooks/useCreateDocumentOnPhotoTaken';
import { useDocuments } from '@hooks/useDocuments';
import { useShareLink } from '@hooks/useShareLink';
import { FlashList } from '@shopify/flash-list';
import { useCurrentDocumentOnFullScreen } from '@store/useCurrentDocumentOnFullScreen';
import { useDocumentCameraIsOpen } from '@store/useDocumentCameraIsOpen';
import { BoxForBottomRightIcon } from '@ui-kit/BoxForBottomRightIcon';
import * as DocumentCameraUtils from '@ui-kit/DocumentCameraUtils';
import * as Documents from '@ui-kit/Documents';
import { IconButton, View, VStack } from 'native-base';

export default function DocumentsScreen() {
  const { setCurrentDocumentOnFullScreen } = useCurrentDocumentOnFullScreen();
  const { setDocumentCameraIsOpen } = useDocumentCameraIsOpen();
  const { onShare } = useShareLink();
  const { documents, loading } = useDocuments();
  const { cameraPermission, grantCameraAccess, canAskAgain } = useCameraPermissions();

  useCreateDocumentOnPhotoConfirmed();

  function onOpenCamera() {
    setDocumentCameraIsOpen(true);
  }

  return (
    <View flex={1} bgColor="#1C1C1C">
      <MainBackground link="https://i.etsystatic.com/34570961/r/il/5db996/4530915483/il_1080xN.4530915483_rbep.jpg" />
      {!cameraPermission && <DocumentCameraUtils.GrantAccessModal onConfirm={grantCameraAccess} />}
      {!canAskAgain && <DocumentCameraUtils.CannotAskAgainModal />}
      {loading ||
        (!cameraPermission && (
          <VStack mx="10" mt="10">
            <Documents.Skeleton />
          </VStack>
        ))}

      <FlashList
        estimatedItemSize={96}
        data={documents}
        contentContainerStyle={{ paddingBottom: 100, paddingTop: 20 }}
        renderItem={({ item: document }) => (
          <Documents.Card
            key={document.id}
            label={`Your ${document.type}`}
            uri={document.image_url}
            onPress={() => {}}>
            <Documents.Card.IconButton
              iconName="arrow-expand"
              onPress={() => setCurrentDocumentOnFullScreen(document.image_url)}
            />
            <Documents.Card.IconButton
              iconName="share-variant"
              onPress={() => onShare(document.image_url)}
            />
          </Documents.Card>
        )}
      />
      <DocumentCamera />
      <DocumentImageExpanded />
      <BoxForBottomRightIcon>
        <VStack space={4}>
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
        </VStack>
      </BoxForBottomRightIcon>
    </View>
  );
}
