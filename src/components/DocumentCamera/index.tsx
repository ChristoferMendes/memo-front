import { CameraFullScreen } from '@components/CameraFullScreen';
import { useCamera } from '@hooks/useCamera';
import { useCameraPermissions } from '@hooks/useCameraPermissions';
import { useDocumentCameraIsOpen } from '@store/useDocumentCameraIsOpen';
import { useDocumentPhotoConfirmed } from '@store/useDocumentPhotoTaken';
import { usePreviewSelectedDocumentType } from '@store/usePreviewSelectedDocumentType';
import * as DocumentCameraUtils from '@ui-kit/DocumentCameraUtils';
import { FlipType, SaveFormat, manipulateAsync } from 'expo-image-manipulator';

export function DocumentCamera() {
  const { documentCameraIsOpen, setDocumentCameraIsOpen } = useDocumentCameraIsOpen();
  const { setCamera, takePicture, photoTaken, purgePhotoTaken, setPhotoTaken } = useCamera();
  const { selectedDocumentType } = usePreviewSelectedDocumentType();
  const { storePhoto } = useDocumentPhotoConfirmed();

  function onCloseButton() {
    purgePhotoTaken();
    setDocumentCameraIsOpen(false);
  }

  async function rotate90AndFlip() {
    if (!photoTaken?.base64) return;

    const manipulationResult = await manipulateAsync(
      photoTaken.uri,
      [{ rotate: 90 }, { flip: FlipType.Vertical }],
      {
        compress: 1,
        format: SaveFormat.PNG,
        base64: true,
      }
    );

    setPhotoTaken(manipulationResult);
  }

  function onSubmit() {
    if (!photoTaken?.base64) return;

    storePhoto({ title: '', type: selectedDocumentType, url: photoTaken.base64 });
  }

  if (!documentCameraIsOpen) return null;

  return (
    <CameraFullScreen setRef={setCamera}>
      <CameraFullScreen.HeaderActionButtonsContainer>
        {photoTaken?.base64 && <CameraFullScreen.EditButton onPress={rotate90AndFlip} />}
        <CameraFullScreen.CloseButton onPress={onCloseButton} />
      </CameraFullScreen.HeaderActionButtonsContainer>
      <CameraFullScreen.TakePictureButton onPress={takePicture} />
      {photoTaken?.base64 && (
        <CameraFullScreen.Preview base64={photoTaken.base64}>
          <CameraFullScreen.PreviewSelect />
          <CameraFullScreen.SubmitButton onPress={onSubmit} />
        </CameraFullScreen.Preview>
      )}
    </CameraFullScreen>
  );
}
