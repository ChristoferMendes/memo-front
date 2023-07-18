import { Camera, CameraCapturedPicture } from 'expo-camera';
import { useState } from 'react';

export function useCamera() {
  const [camera, setCamera] = useState<Camera | null>(null);
  const [photoTaken, setPhotoTaken] = useState<CameraCapturedPicture | null>(null);

  const takePicture = async () => {
    if (!camera) return;

    const photo = await camera.takePictureAsync({ base64: true });

    populatePhotoTaken(photo);
  };

  const populatePhotoTaken = (photo: CameraCapturedPicture) => {
    setPhotoTaken(photo);
  };

  function purgePhotoTaken() {
    return setPhotoTaken(null);
  }

  return { takePicture, setCamera, photoTaken, purgePhotoTaken, setPhotoTaken };
}
