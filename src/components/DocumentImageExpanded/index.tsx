import { ImageBase64 } from '@components/ImageBase64';
import { HStack, Modal } from 'native-base';
import { useCurrentDocumentOnFullScreen } from 'src/store/useCurrentDocumentOnFullScreen';

export function DocumentImageExpanded() {
  const { currentDocumentOnFullScreen, setCurrentDocumentOnFullScreen } =
    useCurrentDocumentOnFullScreen();

  const removeCurrentDocumentOnFullScreen = () => {
    setCurrentDocumentOnFullScreen('');
  };

  return (
    <Modal
      isOpen={Boolean(currentDocumentOnFullScreen)}
      onClose={removeCurrentDocumentOnFullScreen}>
      <HStack position="absolute" w="full" h="full" alignItems="center" justifyContent="center">
        <ImageBase64 base64={currentDocumentOnFullScreen} alt="a" size={96} resizeMode="contain" />
      </HStack>
    </Modal>
  );
}
