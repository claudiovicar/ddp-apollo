export const typeDefs = [`
type Query {
  foo: String
}

type Subscription {
  fooSub: String
}

schema {
  query: Query
  subscription: Subscription
}
`];
