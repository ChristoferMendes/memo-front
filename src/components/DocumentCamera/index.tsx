import { CameraFullScreen } from '@components/CameraFullScreen';
import { useCamera } from '@hooks/useCamera';
import { CameraCapturedPicture } from 'expo-camera';
import { useEffect } from 'react';
import { useDocumentCameraIsOpen } from 'src/store/useDocumentCameraIsOpen';

interface DocumentCameraProps {
  onPhotoTaken: (photo: CameraCapturedPicture) => void;
}

export function DocumentCamera({ onPhotoTaken }: DocumentCameraProps) {
  const { documentCameraIsOpen, setDocumentCameraIsOpen } = useDocumentCameraIsOpen();
  const { setCamera, takePicture, photoTaken } = useCamera();

  useEffect(() => {
    if (!photoTaken) return;

    onPhotoTaken(photoTaken);
  }, [photoTaken]);

  return (
    <>
      {documentCameraIsOpen && (
        <>
          <CameraFullScreen setRef={setCamera}>
            <CameraFullScreen.CloseButton onPress={() => setDocumentCameraIsOpen(false)} />
            <CameraFullScreen.TakePictureButton onPress={takePicture} />
          </CameraFullScreen>
        </>
      )}
    </>
  );
}
