import { create } from 'zustand';

interface IDocumentCameraIsOpen {
  documentCameraIsOpen: boolean;
  setDocumentCameraIsOpen: (documentCameraIsOpen: boolean) => void;
}

export const useDocumentCameraIsOpen = create<IDocumentCameraIsOpen>((set) => ({
  documentCameraIsOpen: false,
  setDocumentCameraIsOpen: (documentCameraIsOpen: boolean) => set({ documentCameraIsOpen }),
}));
