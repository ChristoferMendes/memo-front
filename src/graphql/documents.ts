import { gql } from 'src/__generated__';

export const CREATE_DOCUMENT = gql(`
  mutation create($title: String!, $image_url: String!, $user_id: Float!) {
    createDocument(
      createDocumentInput: { title: $title, image_url: $image_url, user_id: $user_id }
    ) {
      id
      title
      user {
        name
      }
    }
  }
`);
