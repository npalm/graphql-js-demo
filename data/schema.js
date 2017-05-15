const typeDefinitions = `
type Person {
  id: Int
  name: String
  talks: [Talk]
}

type Talk {
  id: Int
  title: String
  abstract: String
  speakers: [Person]
}

type Query {
  persons: [Person]
  person(name: String): Person
  talks: [Talk]
  talk(title: String): Talk
}

type Mutation {
  createPerson(
    name: String!
  ): Person
}

schema {
  query: Query
  mutation: Mutation
}
`;

export default [typeDefinitions];
