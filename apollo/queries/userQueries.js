import { gql } from "@apollo/client";

export const ME_QUERY = gql`
  query ME_QUERY {
    me {
      id
      name
      email
      permissions
    }
  }
`;

export const GET_ALL_USERS_QUERY = gql`
  query GET_ALL_USERS_QUERY {
    users {
      id
      name
      email
      permissions
    }
  }
`;
