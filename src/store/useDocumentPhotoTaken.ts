import { DocumentTypeEnum } from '@generated/graphql';
import { create } from 'zustand';

interface PhotoTakenStore {
  photo: {
    url: string;
    title: string;
    type: DocumentTypeEnum;
  };
  cleanPhoto: () => void;
  storePhoto: ({
    url,
    title,
    type,
  }: {
    url: string;
    title: string;
    type: DocumentTypeEnum;
  }) => void;
}

export const useDocumentPhotoTaken = create<PhotoTakenStore>((set) => ({
  photo: {
    title: '',
    type: DocumentTypeEnum.Id,
    url: '',
  },
  cleanPhoto: () => set({ photo: { title: '', type: DocumentTypeEnum.Id, url: '' } }),
  storePhoto: (payload) => set({ photo: payload }),
}));
