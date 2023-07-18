import { HStack, Image, Modal } from 'native-base';
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
        <Image
          source={{ uri: currentDocumentOnFullScreen }}
          alt="a"
          size={96}
          resizeMode="contain"
        />
      </HStack>
    </Modal>
  );
}
