import { useCreateDocument } from '@hooks/useCreateDocument';
import { useDocumentCameraIsOpen } from '@store/useDocumentCameraIsOpen';
import { useDocumentPhotoConfirmed } from '@store/useDocumentPhotoTaken';
import { useEffect } from 'react';

export function useCreateDocumentOnPhotoTaken() {
  const { photo, cleanPhoto } = useDocumentPhotoConfirmed();
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
