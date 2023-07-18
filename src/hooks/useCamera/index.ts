import { useDocumentCameraIsOpen } from '@store/useDocumentCameraIsOpen';
import { Camera, CameraCapturedPicture } from 'expo-camera';
import { useState } from 'react';

export function useCamera() {
  const [camera, setCamera] = useState<Camera | null>(null);
  const { setDocumentCameraIsOpen } = useDocumentCameraIsOpen();
  const [photoTaken, setPhotoTaken] = useState<CameraCapturedPicture | null>(null);

  const takePicture = async () => {
    if (!camera) return;

    const photo = await camera.takePictureAsync({ base64: true });

    populatePhotoTaken(photo);
    setDocumentCameraIsOpen(false);
  };

  const populatePhotoTaken = (photo: CameraCapturedPicture) => {
    setPhotoTaken(photo);
  };

  return { takePicture, setCamera, photoTaken };
}
