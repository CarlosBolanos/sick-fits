import { gql } from '@apollo/client';

export const typeDefs = gql`
  extend type Query {
    isLoggedIn: Boolean!
  }

  extend type Launch {
    isInCart: Boolean!
  }

  extend type Mutation {
    addOrRemoveFromCart(id: ID!): [ID!]!
  }
`;

export const resolvers = {};