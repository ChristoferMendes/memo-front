import { create } from 'zustand';

interface IDocumentCameraIsOpen {
  documentCameraIsOpen: boolean;
  setDocumentCameraIsOpen: (documentCameraIsOpen: boolean) => void;
  onOpenCamera: () => void;
}

export const useDocumentCameraIsOpen = create<IDocumentCameraIsOpen>((set) => ({
  documentCameraIsOpen: false,
  setDocumentCameraIsOpen: (documentCameraIsOpen: boolean) => set({ documentCameraIsOpen }),
  onOpenCamera: () => set({ documentCameraIsOpen: true }),
}));
