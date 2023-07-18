import { CameraFullScreen } from '@components/CameraFullScreen';
import { useCamera } from '@hooks/useCamera';
import { useDocumentCameraIsOpen } from 'src/store/useDocumentCameraIsOpen';

export function DocumentCamera() {
  const { documentCameraIsOpen, setDocumentCameraIsOpen } = useDocumentCameraIsOpen();
  const { setCamera, takePicture, photoTaken, purgePhotoTaken } = useCamera();

  function onCloseButton() {
    purgePhotoTaken();
    setDocumentCameraIsOpen(false);
  }

  return (
    <>
      {documentCameraIsOpen && (
        <>
          <CameraFullScreen setRef={setCamera}>
            <CameraFullScreen.CloseButton onPress={onCloseButton} />
            <CameraFullScreen.TakePictureButton onPress={takePicture} />
            {photoTaken?.base64 && <CameraFullScreen.Preview base64={photoTaken.base64} />}
          </CameraFullScreen>
        </>
      )}
    </>
  );
}
