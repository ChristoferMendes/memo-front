import { gql } from 'src/__generated__';

export const CREATE_DOCUMENT = gql(`
  mutation create($title: String!, $image_url: String!, $user_id: Float!, $type: DocumentTypeEnum!) {
    createDocument(
      createDocumentInput: { title: $title, image_url: $image_url, user_id: $user_id, type: $type }
    ) {
      id
      title
      type
      user {
        name
      }
    }
  }
`);

export const DOCUMENTS_BY_USER = gql(`
  query getByUser ($user_id: Float!){
    documentsByUser(user_id: $user_id) {
      id
      title
      image_url
      type
      id
      image_url
    }
  }
`);
