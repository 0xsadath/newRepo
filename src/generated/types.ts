import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: { input: any; output: any; }
};

/** All input for the create `Item` mutation. */
export type CreateItemInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Item` to be created by this mutation. */
  item: ItemInput;
};

/** The output of our create `Item` mutation. */
export type CreateItemPayload = {
  __typename?: 'CreateItemPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Item` that was created by this mutation. */
  item?: Maybe<Item>;
  /** An edge for our `Item`. May be used by Relay 1. */
  itemEdge?: Maybe<ItemsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Item` mutation. */
export type CreateItemPayloadItemEdgeArgs = {
  orderBy?: InputMaybe<Array<ItemsOrderBy>>;
};

/** All input for the `deleteItemByNodeId` mutation. */
export type DeleteItemByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Item` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** All input for the `deleteItem` mutation. */
export type DeleteItemInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
};

/** The output of our delete `Item` mutation. */
export type DeleteItemPayload = {
  __typename?: 'DeleteItemPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedItemNodeId?: Maybe<Scalars['ID']['output']>;
  /** The `Item` that was deleted by this mutation. */
  item?: Maybe<Item>;
  /** An edge for our `Item`. May be used by Relay 1. */
  itemEdge?: Maybe<ItemsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Item` mutation. */
export type DeleteItemPayloadItemEdgeArgs = {
  orderBy?: InputMaybe<Array<ItemsOrderBy>>;
};

export type Item = Node & {
  __typename?: 'Item';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  serial?: Maybe<Scalars['String']['output']>;
};

/** A condition to be used against `Item` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type ItemCondition = {
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `serial` field. */
  serial?: InputMaybe<Scalars['String']['input']>;
};

/** An input for mutations affecting `Item` */
export type ItemInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  serial?: InputMaybe<Scalars['String']['input']>;
};

/** Represents an update to a `Item`. Fields that are set will be updated. */
export type ItemPatch = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  serial?: InputMaybe<Scalars['String']['input']>;
};

/** A connection to a list of `Item` values. */
export type ItemsConnection = {
  __typename?: 'ItemsConnection';
  /** A list of edges which contains the `Item` and cursor to aid in pagination. */
  edges: Array<ItemsEdge>;
  /** A list of `Item` objects. */
  nodes: Array<Maybe<Item>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Item` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Item` edge in the connection. */
export type ItemsEdge = {
  __typename?: 'ItemsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Item` at the end of the edge. */
  node?: Maybe<Item>;
};

/** Methods to use when ordering `Item`. */
export enum ItemsOrderBy {
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  SerialAsc = 'SERIAL_ASC',
  SerialDesc = 'SERIAL_DESC'
}

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a single `Item`. */
  createItem?: Maybe<CreateItemPayload>;
  /** Deletes a single `Item` using a unique key. */
  deleteItem?: Maybe<DeleteItemPayload>;
  /** Deletes a single `Item` using its globally unique id. */
  deleteItemByNodeId?: Maybe<DeleteItemPayload>;
  /** Updates a single `Item` using a unique key and a patch. */
  updateItem?: Maybe<UpdateItemPayload>;
  /** Updates a single `Item` using its globally unique id and a patch. */
  updateItemByNodeId?: Maybe<UpdateItemPayload>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateItemArgs = {
  input: CreateItemInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteItemArgs = {
  input: DeleteItemInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteItemByNodeIdArgs = {
  input: DeleteItemByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateItemArgs = {
  input: UpdateItemInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateItemByNodeIdArgs = {
  input: UpdateItemByNodeIdInput;
};

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']['output']>;
};

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  __typename?: 'Query';
  item?: Maybe<Item>;
  /** Reads a single `Item` using its globally unique `ID`. */
  itemByNodeId?: Maybe<Item>;
  /** Reads and enables pagination through a set of `Item`. */
  items?: Maybe<ItemsConnection>;
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars['ID']['output'];
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
};


/** The root query type which gives access points into the data universe. */
export type QueryItemArgs = {
  id: Scalars['Int']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryItemByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryItemsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ItemCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ItemsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars['ID']['input'];
};

/** All input for the `updateItemByNodeId` mutation. */
export type UpdateItemByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Item` to be updated. */
  nodeId: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `Item` being updated. */
  patch: ItemPatch;
};

/** All input for the `updateItem` mutation. */
export type UpdateItemInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  /** An object where the defined keys will be set on the `Item` being updated. */
  patch: ItemPatch;
};

/** The output of our update `Item` mutation. */
export type UpdateItemPayload = {
  __typename?: 'UpdateItemPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Item` that was updated by this mutation. */
  item?: Maybe<Item>;
  /** An edge for our `Item`. May be used by Relay 1. */
  itemEdge?: Maybe<ItemsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Item` mutation. */
export type UpdateItemPayloadItemEdgeArgs = {
  orderBy?: InputMaybe<Array<ItemsOrderBy>>;
};

export type ItemQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type ItemQueryQuery = { __typename?: 'Query', items?: { __typename?: 'ItemsConnection', nodes: Array<{ __typename?: 'Item', description?: string | null, id: number, name: string, nodeId: string, serial?: string | null } | null> } | null };


export const ItemQueryDocument = gql`
    query ItemQuery {
  items {
    nodes {
      description
      id
      name
      nodeId
      serial
    }
  }
}
    `;

export function useItemQueryQuery(options?: Omit<Urql.UseQueryArgs<ItemQueryQueryVariables>, 'query'>) {
  return Urql.useQuery<ItemQueryQuery, ItemQueryQueryVariables>({ query: ItemQueryDocument, ...options });
};