import { useMutation } from '@apollo/client';
import { useAuth } from '@context/auth';
import { DocumentTypeEnum } from '@generated/graphql';
import { CREATE_DOCUMENT, DOCUMENTS_BY_USER } from '@graphql/documents';

export function useCreateDocument() {
  const { user } = useAuth();
  const [create, { data }] = useMutation(CREATE_DOCUMENT);

  function executeCreateDocumentMutation({
    image_url,
    title,
    type,
  }: {
    image_url: string;
    title: string;
    type: DocumentTypeEnum;
  }) {
    if (!user) return;

    return create({
      variables: {
        image_url,
        title,
        user_id: user.id,
        type,
      },
      refetchQueries: [DOCUMENTS_BY_USER],
    });
  }

  return { executeCreateDocumentMutation, data };
}
