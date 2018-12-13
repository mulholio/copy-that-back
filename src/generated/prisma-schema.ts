export const typeDefs = /* GraphQL */ `type AggregateThat {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar Long

type Mutation {
  createThat(data: ThatCreateInput!): That!
  updateThat(data: ThatUpdateInput!, where: ThatWhereUniqueInput!): That
  updateManyThats(data: ThatUpdateManyMutationInput!, where: ThatWhereInput): BatchPayload!
  upsertThat(where: ThatWhereUniqueInput!, create: ThatCreateInput!, update: ThatUpdateInput!): That!
  deleteThat(where: ThatWhereUniqueInput!): That
  deleteManyThats(where: ThatWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

enum Permission {
  ADMIN
  USER
}

type Query {
  that(where: ThatWhereUniqueInput!): That
  thats(where: ThatWhereInput, orderBy: ThatOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [That]!
  thatsConnection(where: ThatWhereInput, orderBy: ThatOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ThatConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  that(where: ThatSubscriptionWhereInput): ThatSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type That {
  id: ID!
  title: String!
  description: String!
  source: String!
  whyNotTry: String!
  image: String!
  largeImage: String!
  submittedBy: User!
}

type ThatConnection {
  pageInfo: PageInfo!
  edges: [ThatEdge]!
  aggregate: AggregateThat!
}

input ThatCreateInput {
  title: String!
  description: String!
  source: String!
  whyNotTry: String!
  image: String!
  largeImage: String!
  submittedBy: UserCreateOneWithoutThatsInput!
}

input ThatCreateManyWithoutSubmittedByInput {
  create: [ThatCreateWithoutSubmittedByInput!]
  connect: [ThatWhereUniqueInput!]
}

input ThatCreateWithoutSubmittedByInput {
  title: String!
  description: String!
  source: String!
  whyNotTry: String!
  image: String!
  largeImage: String!
}

type ThatEdge {
  node: That!
  cursor: String!
}

enum ThatOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  description_ASC
  description_DESC
  source_ASC
  source_DESC
  whyNotTry_ASC
  whyNotTry_DESC
  image_ASC
  image_DESC
  largeImage_ASC
  largeImage_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ThatPreviousValues {
  id: ID!
  title: String!
  description: String!
  source: String!
  whyNotTry: String!
  image: String!
  largeImage: String!
}

input ThatScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  source: String
  source_not: String
  source_in: [String!]
  source_not_in: [String!]
  source_lt: String
  source_lte: String
  source_gt: String
  source_gte: String
  source_contains: String
  source_not_contains: String
  source_starts_with: String
  source_not_starts_with: String
  source_ends_with: String
  source_not_ends_with: String
  whyNotTry: String
  whyNotTry_not: String
  whyNotTry_in: [String!]
  whyNotTry_not_in: [String!]
  whyNotTry_lt: String
  whyNotTry_lte: String
  whyNotTry_gt: String
  whyNotTry_gte: String
  whyNotTry_contains: String
  whyNotTry_not_contains: String
  whyNotTry_starts_with: String
  whyNotTry_not_starts_with: String
  whyNotTry_ends_with: String
  whyNotTry_not_ends_with: String
  image: String
  image_not: String
  image_in: [String!]
  image_not_in: [String!]
  image_lt: String
  image_lte: String
  image_gt: String
  image_gte: String
  image_contains: String
  image_not_contains: String
  image_starts_with: String
  image_not_starts_with: String
  image_ends_with: String
  image_not_ends_with: String
  largeImage: String
  largeImage_not: String
  largeImage_in: [String!]
  largeImage_not_in: [String!]
  largeImage_lt: String
  largeImage_lte: String
  largeImage_gt: String
  largeImage_gte: String
  largeImage_contains: String
  largeImage_not_contains: String
  largeImage_starts_with: String
  largeImage_not_starts_with: String
  largeImage_ends_with: String
  largeImage_not_ends_with: String
  AND: [ThatScalarWhereInput!]
  OR: [ThatScalarWhereInput!]
  NOT: [ThatScalarWhereInput!]
}

type ThatSubscriptionPayload {
  mutation: MutationType!
  node: That
  updatedFields: [String!]
  previousValues: ThatPreviousValues
}

input ThatSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ThatWhereInput
  AND: [ThatSubscriptionWhereInput!]
  OR: [ThatSubscriptionWhereInput!]
  NOT: [ThatSubscriptionWhereInput!]
}

input ThatUpdateInput {
  title: String
  description: String
  source: String
  whyNotTry: String
  image: String
  largeImage: String
  submittedBy: UserUpdateOneRequiredWithoutThatsInput
}

input ThatUpdateManyDataInput {
  title: String
  description: String
  source: String
  whyNotTry: String
  image: String
  largeImage: String
}

input ThatUpdateManyMutationInput {
  title: String
  description: String
  source: String
  whyNotTry: String
  image: String
  largeImage: String
}

input ThatUpdateManyWithoutSubmittedByInput {
  create: [ThatCreateWithoutSubmittedByInput!]
  delete: [ThatWhereUniqueInput!]
  connect: [ThatWhereUniqueInput!]
  disconnect: [ThatWhereUniqueInput!]
  update: [ThatUpdateWithWhereUniqueWithoutSubmittedByInput!]
  upsert: [ThatUpsertWithWhereUniqueWithoutSubmittedByInput!]
  deleteMany: [ThatScalarWhereInput!]
  updateMany: [ThatUpdateManyWithWhereNestedInput!]
}

input ThatUpdateManyWithWhereNestedInput {
  where: ThatScalarWhereInput!
  data: ThatUpdateManyDataInput!
}

input ThatUpdateWithoutSubmittedByDataInput {
  title: String
  description: String
  source: String
  whyNotTry: String
  image: String
  largeImage: String
}

input ThatUpdateWithWhereUniqueWithoutSubmittedByInput {
  where: ThatWhereUniqueInput!
  data: ThatUpdateWithoutSubmittedByDataInput!
}

input ThatUpsertWithWhereUniqueWithoutSubmittedByInput {
  where: ThatWhereUniqueInput!
  update: ThatUpdateWithoutSubmittedByDataInput!
  create: ThatCreateWithoutSubmittedByInput!
}

input ThatWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  source: String
  source_not: String
  source_in: [String!]
  source_not_in: [String!]
  source_lt: String
  source_lte: String
  source_gt: String
  source_gte: String
  source_contains: String
  source_not_contains: String
  source_starts_with: String
  source_not_starts_with: String
  source_ends_with: String
  source_not_ends_with: String
  whyNotTry: String
  whyNotTry_not: String
  whyNotTry_in: [String!]
  whyNotTry_not_in: [String!]
  whyNotTry_lt: String
  whyNotTry_lte: String
  whyNotTry_gt: String
  whyNotTry_gte: String
  whyNotTry_contains: String
  whyNotTry_not_contains: String
  whyNotTry_starts_with: String
  whyNotTry_not_starts_with: String
  whyNotTry_ends_with: String
  whyNotTry_not_ends_with: String
  image: String
  image_not: String
  image_in: [String!]
  image_not_in: [String!]
  image_lt: String
  image_lte: String
  image_gt: String
  image_gte: String
  image_contains: String
  image_not_contains: String
  image_starts_with: String
  image_not_starts_with: String
  image_ends_with: String
  image_not_ends_with: String
  largeImage: String
  largeImage_not: String
  largeImage_in: [String!]
  largeImage_not_in: [String!]
  largeImage_lt: String
  largeImage_lte: String
  largeImage_gt: String
  largeImage_gte: String
  largeImage_contains: String
  largeImage_not_contains: String
  largeImage_starts_with: String
  largeImage_not_starts_with: String
  largeImage_ends_with: String
  largeImage_not_ends_with: String
  submittedBy: UserWhereInput
  AND: [ThatWhereInput!]
  OR: [ThatWhereInput!]
  NOT: [ThatWhereInput!]
}

input ThatWhereUniqueInput {
  id: ID
}

type User {
  id: ID!
  username: String!
  email: String!
  password: String!
  thats(where: ThatWhereInput, orderBy: ThatOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [That!]
  permissions: [Permission!]!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  username: String!
  email: String!
  password: String!
  thats: ThatCreateManyWithoutSubmittedByInput
  permissions: UserCreatepermissionsInput
}

input UserCreateOneWithoutThatsInput {
  create: UserCreateWithoutThatsInput
  connect: UserWhereUniqueInput
}

input UserCreatepermissionsInput {
  set: [Permission!]
}

input UserCreateWithoutThatsInput {
  username: String!
  email: String!
  password: String!
  permissions: UserCreatepermissionsInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  username_ASC
  username_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  username: String!
  email: String!
  password: String!
  permissions: [Permission!]!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  username: String
  email: String
  password: String
  thats: ThatUpdateManyWithoutSubmittedByInput
  permissions: UserUpdatepermissionsInput
}

input UserUpdateManyMutationInput {
  username: String
  email: String
  password: String
  permissions: UserUpdatepermissionsInput
}

input UserUpdateOneRequiredWithoutThatsInput {
  create: UserCreateWithoutThatsInput
  update: UserUpdateWithoutThatsDataInput
  upsert: UserUpsertWithoutThatsInput
  connect: UserWhereUniqueInput
}

input UserUpdatepermissionsInput {
  set: [Permission!]
}

input UserUpdateWithoutThatsDataInput {
  username: String
  email: String
  password: String
  permissions: UserUpdatepermissionsInput
}

input UserUpsertWithoutThatsInput {
  update: UserUpdateWithoutThatsDataInput!
  create: UserCreateWithoutThatsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  username: String
  username_not: String
  username_in: [String!]
  username_not_in: [String!]
  username_lt: String
  username_lte: String
  username_gt: String
  username_gte: String
  username_contains: String
  username_not_contains: String
  username_starts_with: String
  username_not_starts_with: String
  username_ends_with: String
  username_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  thats_every: ThatWhereInput
  thats_some: ThatWhereInput
  thats_none: ThatWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`