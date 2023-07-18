import { useMutation } from '@apollo/client';
import { useAuth } from '@context/auth';
import { CREATE_DOCUMENT } from '@graphql/documents';

export function useCreateDocument() {
  const { user } = useAuth();
  const [create, { data }] = useMutation(CREATE_DOCUMENT);

  function executeCreateDocumentMutation({
    image_url,
    title,
  }: {
    image_url: string;
    title: string;
  }) {
    if (!user) return;

    return create({
      variables: {
        image_url,
        title,
        user_id: user.id,
      },
    });
  }

  return { executeCreateDocumentMutation, data };
}
