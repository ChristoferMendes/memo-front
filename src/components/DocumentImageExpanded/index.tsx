import { ImageBase64 } from '@components/ImageBase64';
import { AnimatePresence, MotiView } from 'moti';
import { Modal } from 'native-base';
import { useCurrentDocumentOnFullScreen } from 'src/store/useCurrentDocumentOnFullScreen';

export function DocumentImageExpanded() {
  const { currentDocumentOnFullScreen, setCurrentDocumentOnFullScreen } =
    useCurrentDocumentOnFullScreen();

  const removeCurrentDocumentOnFullScreen = () => {
    setCurrentDocumentOnFullScreen('');
  };

  const isOpen = Boolean(currentDocumentOnFullScreen);

  const initial = { opacity: 0, scale: 0.3 };
  const animate = { opacity: 1, scale: 1 };

  return (
    <AnimatePresence>
      {isOpen && (
        <Modal isOpen onClose={removeCurrentDocumentOnFullScreen}>
          <MotiView
            from={initial}
            animate={animate}
            exit={initial}
            transition={{ type: 'timing', duration: 300 }}>
            <ImageBase64
              base64={currentDocumentOnFullScreen}
              alt="a"
              size={96}
              resizeMode="contain"
            />
          </MotiView>
        </Modal>
      )}
    </AnimatePresence>
  );
}
