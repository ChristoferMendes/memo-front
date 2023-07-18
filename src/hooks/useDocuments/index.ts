import { useQuery } from '@apollo/client';
import { useAuth } from '@context/auth';
import { DOCUMENTS_BY_USER } from '@graphql/documents';

export function useDocuments() {
  const { user } = useAuth();
  const { data } = useQuery(DOCUMENTS_BY_USER, { variables: { user_id: user?.id ?? 0 } });

  return { documents: data };
}
