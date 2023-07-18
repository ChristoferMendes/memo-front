import { create } from 'zustand';

interface ICurrentDocumentOnFullScreen {
  currentDocumentOnFullScreen: string;
  setCurrentDocumentOnFullScreen: (currentDocumentOnFullScreen: string) => void;
}

export const useCurrentDocumentOnFullScreen = create<ICurrentDocumentOnFullScreen>((set) => ({
  currentDocumentOnFullScreen: '',
  setCurrentDocumentOnFullScreen: (currentDocumentOnFullScreen: string) =>
    set({ currentDocumentOnFullScreen }),
}));
