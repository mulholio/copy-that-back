export const typeDefs = /* GraphQL */ `type AggregateSkill {
  count: Int!
}

type AggregateTag {
  count: Int!
}

type AggregateThat {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

enum Difficulty {
  EASY
  MEDIUM
  HARD
}

scalar Long

type Mutation {
  createSkill(data: SkillCreateInput!): Skill!
  updateSkill(data: SkillUpdateInput!, where: SkillWhereUniqueInput!): Skill
  updateManySkills(data: SkillUpdateManyMutationInput!, where: SkillWhereInput): BatchPayload!
  upsertSkill(where: SkillWhereUniqueInput!, create: SkillCreateInput!, update: SkillUpdateInput!): Skill!
  deleteSkill(where: SkillWhereUniqueInput!): Skill
  deleteManySkills(where: SkillWhereInput): BatchPayload!
  createTag(data: TagCreateInput!): Tag!
  updateTag(data: TagUpdateInput!, where: TagWhereUniqueInput!): Tag
  updateManyTags(data: TagUpdateManyMutationInput!, where: TagWhereInput): BatchPayload!
  upsertTag(where: TagWhereUniqueInput!, create: TagCreateInput!, update: TagUpdateInput!): Tag!
  deleteTag(where: TagWhereUniqueInput!): Tag
  deleteManyTags(where: TagWhereInput): BatchPayload!
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
  skill(where: SkillWhereUniqueInput!): Skill
  skills(where: SkillWhereInput, orderBy: SkillOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Skill]!
  skillsConnection(where: SkillWhereInput, orderBy: SkillOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SkillConnection!
  tag(where: TagWhereUniqueInput!): Tag
  tags(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tag]!
  tagsConnection(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TagConnection!
  that(where: ThatWhereUniqueInput!): That
  thats(where: ThatWhereInput, orderBy: ThatOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [That]!
  thatsConnection(where: ThatWhereInput, orderBy: ThatOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ThatConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Skill {
  id: ID!
  name: String!
  thats(where: ThatWhereInput, orderBy: ThatOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [That!]
}

type SkillConnection {
  pageInfo: PageInfo!
  edges: [SkillEdge]!
  aggregate: AggregateSkill!
}

input SkillCreateInput {
  name: String!
  thats: ThatCreateManyWithoutSkillsInput
}

input SkillCreateManyWithoutThatsInput {
  create: [SkillCreateWithoutThatsInput!]
  connect: [SkillWhereUniqueInput!]
}

input SkillCreateWithoutThatsInput {
  name: String!
}

type SkillEdge {
  node: Skill!
  cursor: String!
}

enum SkillOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type SkillPreviousValues {
  id: ID!
  name: String!
}

input SkillScalarWhereInput {
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
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [SkillScalarWhereInput!]
  OR: [SkillScalarWhereInput!]
  NOT: [SkillScalarWhereInput!]
}

type SkillSubscriptionPayload {
  mutation: MutationType!
  node: Skill
  updatedFields: [String!]
  previousValues: SkillPreviousValues
}

input SkillSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SkillWhereInput
  AND: [SkillSubscriptionWhereInput!]
  OR: [SkillSubscriptionWhereInput!]
  NOT: [SkillSubscriptionWhereInput!]
}

input SkillUpdateInput {
  name: String
  thats: ThatUpdateManyWithoutSkillsInput
}

input SkillUpdateManyDataInput {
  name: String
}

input SkillUpdateManyMutationInput {
  name: String
}

input SkillUpdateManyWithoutThatsInput {
  create: [SkillCreateWithoutThatsInput!]
  delete: [SkillWhereUniqueInput!]
  connect: [SkillWhereUniqueInput!]
  disconnect: [SkillWhereUniqueInput!]
  update: [SkillUpdateWithWhereUniqueWithoutThatsInput!]
  upsert: [SkillUpsertWithWhereUniqueWithoutThatsInput!]
  deleteMany: [SkillScalarWhereInput!]
  updateMany: [SkillUpdateManyWithWhereNestedInput!]
}

input SkillUpdateManyWithWhereNestedInput {
  where: SkillScalarWhereInput!
  data: SkillUpdateManyDataInput!
}

input SkillUpdateWithoutThatsDataInput {
  name: String
}

input SkillUpdateWithWhereUniqueWithoutThatsInput {
  where: SkillWhereUniqueInput!
  data: SkillUpdateWithoutThatsDataInput!
}

input SkillUpsertWithWhereUniqueWithoutThatsInput {
  where: SkillWhereUniqueInput!
  update: SkillUpdateWithoutThatsDataInput!
  create: SkillCreateWithoutThatsInput!
}

input SkillWhereInput {
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
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  thats_every: ThatWhereInput
  thats_some: ThatWhereInput
  thats_none: ThatWhereInput
  AND: [SkillWhereInput!]
  OR: [SkillWhereInput!]
  NOT: [SkillWhereInput!]
}

input SkillWhereUniqueInput {
  id: ID
  name: String
}

type Subscription {
  skill(where: SkillSubscriptionWhereInput): SkillSubscriptionPayload
  tag(where: TagSubscriptionWhereInput): TagSubscriptionPayload
  that(where: ThatSubscriptionWhereInput): ThatSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type Tag {
  id: ID!
  name: String!
  thats(where: ThatWhereInput, orderBy: ThatOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [That!]
}

type TagConnection {
  pageInfo: PageInfo!
  edges: [TagEdge]!
  aggregate: AggregateTag!
}

input TagCreateInput {
  name: String!
  thats: ThatCreateManyWithoutTagsInput
}

input TagCreateManyWithoutThatsInput {
  create: [TagCreateWithoutThatsInput!]
  connect: [TagWhereUniqueInput!]
}

input TagCreateWithoutThatsInput {
  name: String!
}

type TagEdge {
  node: Tag!
  cursor: String!
}

enum TagOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type TagPreviousValues {
  id: ID!
  name: String!
}

input TagScalarWhereInput {
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
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [TagScalarWhereInput!]
  OR: [TagScalarWhereInput!]
  NOT: [TagScalarWhereInput!]
}

type TagSubscriptionPayload {
  mutation: MutationType!
  node: Tag
  updatedFields: [String!]
  previousValues: TagPreviousValues
}

input TagSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TagWhereInput
  AND: [TagSubscriptionWhereInput!]
  OR: [TagSubscriptionWhereInput!]
  NOT: [TagSubscriptionWhereInput!]
}

input TagUpdateInput {
  name: String
  thats: ThatUpdateManyWithoutTagsInput
}

input TagUpdateManyDataInput {
  name: String
}

input TagUpdateManyMutationInput {
  name: String
}

input TagUpdateManyWithoutThatsInput {
  create: [TagCreateWithoutThatsInput!]
  delete: [TagWhereUniqueInput!]
  connect: [TagWhereUniqueInput!]
  disconnect: [TagWhereUniqueInput!]
  update: [TagUpdateWithWhereUniqueWithoutThatsInput!]
  upsert: [TagUpsertWithWhereUniqueWithoutThatsInput!]
  deleteMany: [TagScalarWhereInput!]
  updateMany: [TagUpdateManyWithWhereNestedInput!]
}

input TagUpdateManyWithWhereNestedInput {
  where: TagScalarWhereInput!
  data: TagUpdateManyDataInput!
}

input TagUpdateWithoutThatsDataInput {
  name: String
}

input TagUpdateWithWhereUniqueWithoutThatsInput {
  where: TagWhereUniqueInput!
  data: TagUpdateWithoutThatsDataInput!
}

input TagUpsertWithWhereUniqueWithoutThatsInput {
  where: TagWhereUniqueInput!
  update: TagUpdateWithoutThatsDataInput!
  create: TagCreateWithoutThatsInput!
}

input TagWhereInput {
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
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  thats_every: ThatWhereInput
  thats_some: ThatWhereInput
  thats_none: ThatWhereInput
  AND: [TagWhereInput!]
  OR: [TagWhereInput!]
  NOT: [TagWhereInput!]
}

input TagWhereUniqueInput {
  id: ID
  name: String
}

type That {
  id: ID!
  title: String!
  description: String!
  source: String!
  image: String!
  largeImage: String!
  user: User!
  tags(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tag!]
  skills(where: SkillWhereInput, orderBy: SkillOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Skill!]
  difficulty: Difficulty
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
  image: String!
  largeImage: String!
  user: UserCreateOneWithoutThatsInput!
  tags: TagCreateManyWithoutThatsInput
  skills: SkillCreateManyWithoutThatsInput
  difficulty: Difficulty
}

input ThatCreateManyWithoutSkillsInput {
  create: [ThatCreateWithoutSkillsInput!]
  connect: [ThatWhereUniqueInput!]
}

input ThatCreateManyWithoutTagsInput {
  create: [ThatCreateWithoutTagsInput!]
  connect: [ThatWhereUniqueInput!]
}

input ThatCreateManyWithoutUserInput {
  create: [ThatCreateWithoutUserInput!]
  connect: [ThatWhereUniqueInput!]
}

input ThatCreateWithoutSkillsInput {
  title: String!
  description: String!
  source: String!
  image: String!
  largeImage: String!
  user: UserCreateOneWithoutThatsInput!
  tags: TagCreateManyWithoutThatsInput
  difficulty: Difficulty
}

input ThatCreateWithoutTagsInput {
  title: String!
  description: String!
  source: String!
  image: String!
  largeImage: String!
  user: UserCreateOneWithoutThatsInput!
  skills: SkillCreateManyWithoutThatsInput
  difficulty: Difficulty
}

input ThatCreateWithoutUserInput {
  title: String!
  description: String!
  source: String!
  image: String!
  largeImage: String!
  tags: TagCreateManyWithoutThatsInput
  skills: SkillCreateManyWithoutThatsInput
  difficulty: Difficulty
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
  image_ASC
  image_DESC
  largeImage_ASC
  largeImage_DESC
  difficulty_ASC
  difficulty_DESC
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
  image: String!
  largeImage: String!
  difficulty: Difficulty
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
  difficulty: Difficulty
  difficulty_not: Difficulty
  difficulty_in: [Difficulty!]
  difficulty_not_in: [Difficulty!]
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
  image: String
  largeImage: String
  user: UserUpdateOneRequiredWithoutThatsInput
  tags: TagUpdateManyWithoutThatsInput
  skills: SkillUpdateManyWithoutThatsInput
  difficulty: Difficulty
}

input ThatUpdateManyDataInput {
  title: String
  description: String
  source: String
  image: String
  largeImage: String
  difficulty: Difficulty
}

input ThatUpdateManyMutationInput {
  title: String
  description: String
  source: String
  image: String
  largeImage: String
  difficulty: Difficulty
}

input ThatUpdateManyWithoutSkillsInput {
  create: [ThatCreateWithoutSkillsInput!]
  delete: [ThatWhereUniqueInput!]
  connect: [ThatWhereUniqueInput!]
  disconnect: [ThatWhereUniqueInput!]
  update: [ThatUpdateWithWhereUniqueWithoutSkillsInput!]
  upsert: [ThatUpsertWithWhereUniqueWithoutSkillsInput!]
  deleteMany: [ThatScalarWhereInput!]
  updateMany: [ThatUpdateManyWithWhereNestedInput!]
}

input ThatUpdateManyWithoutTagsInput {
  create: [ThatCreateWithoutTagsInput!]
  delete: [ThatWhereUniqueInput!]
  connect: [ThatWhereUniqueInput!]
  disconnect: [ThatWhereUniqueInput!]
  update: [ThatUpdateWithWhereUniqueWithoutTagsInput!]
  upsert: [ThatUpsertWithWhereUniqueWithoutTagsInput!]
  deleteMany: [ThatScalarWhereInput!]
  updateMany: [ThatUpdateManyWithWhereNestedInput!]
}

input ThatUpdateManyWithoutUserInput {
  create: [ThatCreateWithoutUserInput!]
  delete: [ThatWhereUniqueInput!]
  connect: [ThatWhereUniqueInput!]
  disconnect: [ThatWhereUniqueInput!]
  update: [ThatUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [ThatUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [ThatScalarWhereInput!]
  updateMany: [ThatUpdateManyWithWhereNestedInput!]
}

input ThatUpdateManyWithWhereNestedInput {
  where: ThatScalarWhereInput!
  data: ThatUpdateManyDataInput!
}

input ThatUpdateWithoutSkillsDataInput {
  title: String
  description: String
  source: String
  image: String
  largeImage: String
  user: UserUpdateOneRequiredWithoutThatsInput
  tags: TagUpdateManyWithoutThatsInput
  difficulty: Difficulty
}

input ThatUpdateWithoutTagsDataInput {
  title: String
  description: String
  source: String
  image: String
  largeImage: String
  user: UserUpdateOneRequiredWithoutThatsInput
  skills: SkillUpdateManyWithoutThatsInput
  difficulty: Difficulty
}

input ThatUpdateWithoutUserDataInput {
  title: String
  description: String
  source: String
  image: String
  largeImage: String
  tags: TagUpdateManyWithoutThatsInput
  skills: SkillUpdateManyWithoutThatsInput
  difficulty: Difficulty
}

input ThatUpdateWithWhereUniqueWithoutSkillsInput {
  where: ThatWhereUniqueInput!
  data: ThatUpdateWithoutSkillsDataInput!
}

input ThatUpdateWithWhereUniqueWithoutTagsInput {
  where: ThatWhereUniqueInput!
  data: ThatUpdateWithoutTagsDataInput!
}

input ThatUpdateWithWhereUniqueWithoutUserInput {
  where: ThatWhereUniqueInput!
  data: ThatUpdateWithoutUserDataInput!
}

input ThatUpsertWithWhereUniqueWithoutSkillsInput {
  where: ThatWhereUniqueInput!
  update: ThatUpdateWithoutSkillsDataInput!
  create: ThatCreateWithoutSkillsInput!
}

input ThatUpsertWithWhereUniqueWithoutTagsInput {
  where: ThatWhereUniqueInput!
  update: ThatUpdateWithoutTagsDataInput!
  create: ThatCreateWithoutTagsInput!
}

input ThatUpsertWithWhereUniqueWithoutUserInput {
  where: ThatWhereUniqueInput!
  update: ThatUpdateWithoutUserDataInput!
  create: ThatCreateWithoutUserInput!
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
  user: UserWhereInput
  tags_every: TagWhereInput
  tags_some: TagWhereInput
  tags_none: TagWhereInput
  skills_every: SkillWhereInput
  skills_some: SkillWhereInput
  skills_none: SkillWhereInput
  difficulty: Difficulty
  difficulty_not: Difficulty
  difficulty_in: [Difficulty!]
  difficulty_not_in: [Difficulty!]
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
  thats: ThatCreateManyWithoutUserInput
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
  thats: ThatUpdateManyWithoutUserInput
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
  username: String
  email: String
}
`