import { useCreateDocument } from '@hooks/useCreateDocument';
import { useDocumentCameraIsOpen } from '@store/useDocumentCameraIsOpen';
import { useDocumentPhotoTaken } from '@store/useDocumentPhotoTaken';
import { useEffect } from 'react';

export function useCreateDocumentOnPhotoTaken() {
  const { photo, cleanPhoto } = useDocumentPhotoTaken();
  const { executeCreateDocumentMutation } = useCreateDocument();
  const { setDocumentCameraIsOpen } = useDocumentCameraIsOpen();

  async function finishDocumentCreation() {
    await executeCreateDocumentMutation({
      image_url: photo.url,
      title: 'TEST',
      type: photo.type,
    });

    setDocumentCameraIsOpen(false);
    cleanPhoto();
  }

  useEffect(() => {
    if (!photo.url) return;

    finishDocumentCreation();
  }, [photo.url]);
}
