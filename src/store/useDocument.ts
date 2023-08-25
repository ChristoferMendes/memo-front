import { create } from 'zustand';

interface IDocuments {
  currentDocumentIdToBeReplaced: number;
  documents: typeof DOCUMENTS_INITIAL_STATE;
  setCurrentDocumentIdToBeReplaced: (currentDocumentIdToBeReplaced: number) => void;
  updateDocumentUriById: (id: number, uri: string) => void;
}
const DOCUMENTS_INITIAL_STATE = [
  {
    label: 'Your ID',
    uri: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/New_Estonian_ID_card_%282021%29%28front%29.jpg',
    id: 1,
  },
  {
    label: 'Your Passport',
    uri: 'https://www.teclasap.com.br/wp-content/uploads/2020/03/passport.jpg',
    id: 2,
  },
];

export const useDocuments = create<IDocuments>((set) => ({
  currentDocumentIdToBeReplaced: 0,
  documents: DOCUMENTS_INITIAL_STATE,
  setCurrentDocumentIdToBeReplaced(currentDocumentIdToBeReplaced) {
    set({ currentDocumentIdToBeReplaced });
  },
  updateDocumentUriById(id, uri) {
    set((state) => {
      const documents = state.documents.map((document) => {
        const isTheDocumentToBeUpdated = document.id === id;

        if (!isTheDocumentToBeUpdated) return document;

        return { ...document, uri };
      });

      return { documents };
    });
  },
}));
