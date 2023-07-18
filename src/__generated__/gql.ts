/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation login($email: String!, $password: String!) {\n    login(input: { email: $email, password: $password }) {\n      user {\n        id\n        name\n        email\n      }\n      token\n    }\n  }\n": types.LoginDocument,
    "\n  mutation createUser($email: String!, $password: String!, $name: String!) {\n    createUser(createUserInput: { email: $email, password: $password, name: $name }) {\n      id\n      name\n      email\n    }\n  }\n": types.CreateUserDocument,
    "\n  query whoami {\n    me {\n      id\n      name\n      email\n    }\n  }\n": types.WhoamiDocument,
    "\n  mutation create($title: String!, $image_url: String!, $user_id: Float!, $type: DocumentTypeEnum!) {\n    createDocument(\n      createDocumentInput: { title: $title, image_url: $image_url, user_id: $user_id, type: $type }\n    ) {\n      id\n      title\n      type\n      user {\n        name\n      }\n    }\n  }\n": types.CreateDocument,
    "\n  query getByUser ($user_id: Float!){\n    documentsByUser(user_id: $user_id) {\n      id\n      title\n      image_url\n      type\n      id\n      image_url\n    }\n  }\n": types.GetByUserDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation login($email: String!, $password: String!) {\n    login(input: { email: $email, password: $password }) {\n      user {\n        id\n        name\n        email\n      }\n      token\n    }\n  }\n"): (typeof documents)["\n  mutation login($email: String!, $password: String!) {\n    login(input: { email: $email, password: $password }) {\n      user {\n        id\n        name\n        email\n      }\n      token\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation createUser($email: String!, $password: String!, $name: String!) {\n    createUser(createUserInput: { email: $email, password: $password, name: $name }) {\n      id\n      name\n      email\n    }\n  }\n"): (typeof documents)["\n  mutation createUser($email: String!, $password: String!, $name: String!) {\n    createUser(createUserInput: { email: $email, password: $password, name: $name }) {\n      id\n      name\n      email\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query whoami {\n    me {\n      id\n      name\n      email\n    }\n  }\n"): (typeof documents)["\n  query whoami {\n    me {\n      id\n      name\n      email\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation create($title: String!, $image_url: String!, $user_id: Float!, $type: DocumentTypeEnum!) {\n    createDocument(\n      createDocumentInput: { title: $title, image_url: $image_url, user_id: $user_id, type: $type }\n    ) {\n      id\n      title\n      type\n      user {\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation create($title: String!, $image_url: String!, $user_id: Float!, $type: DocumentTypeEnum!) {\n    createDocument(\n      createDocumentInput: { title: $title, image_url: $image_url, user_id: $user_id, type: $type }\n    ) {\n      id\n      title\n      type\n      user {\n        name\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getByUser ($user_id: Float!){\n    documentsByUser(user_id: $user_id) {\n      id\n      title\n      image_url\n      type\n      id\n      image_url\n    }\n  }\n"): (typeof documents)["\n  query getByUser ($user_id: Float!){\n    documentsByUser(user_id: $user_id) {\n      id\n      title\n      image_url\n      type\n      id\n      image_url\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;