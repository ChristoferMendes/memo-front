import { DocumentTypeEnum } from '@generated/graphql';
import { create } from 'zustand';

interface PreviewSelectedDocumentTypeState {
  selectedDocumentType: DocumentTypeEnum;
  setSelectedDocumentType: (selectedDocumentType: DocumentTypeEnum) => void;
}

export const usePreviewSelectedDocumentType = create<PreviewSelectedDocumentTypeState>((set) => ({
  selectedDocumentType: DocumentTypeEnum.Id,
  setSelectedDocumentType: (selectedDocumentType: DocumentTypeEnum) =>
    set({ selectedDocumentType }),
}));
