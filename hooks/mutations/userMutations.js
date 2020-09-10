import { gql } from "@apollo/client";

export const SIGNUP_MUTATTION = gql`
  mutation SIGNUP_MUTATTION(
    $name: String!
    $email: String!
    $password: String!
  ) {
    signup(name: $name, email: $email, password: $password) {
      id
      name
      email
    }
  }
`;

export const SIGN_IN_MUTATION = gql`
  mutation SIGN_IN_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      id
      name
      email
    }
  }
`;

export const SIGN_OUT_MUTATION = gql`
  mutation SIGN_OUT_MUTATION {
    signout {
      id
      name
      email
    }
  }
`;

export const REQUEST_RESET_PASSWORD_MUTATION = gql`
  mutation REQUEST_RESET_PASSWORD_MUTATION($email: String!) {
    requestReset(email: $email) {
      statusCode
      message
    }
  }
`;

export const RESET_PASSWORD_MUTATION = gql`
  mutation REQUEST_RESET_PASSWORD_MUTATION(
    $resetToken: String!
    $password: String!
    $passwordConfirm: String!
  ) {
    resetPassword(
      resetToken: $resetToken
      password: $password
      passwordConfirm: $passwordConfirm
    ) {
      statusCode
      message
    }
  }
`;
