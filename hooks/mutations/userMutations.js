import { gql } from '@apollo/client';

export const SIGNUP_MUTATTION = gql`
    mutation SIGNUP_MUTATTION(
        $name: String!
        $email: String!
        $password: String!        
    ) {
        signup(
            name: $name
            email: $email
            password: $password            
        ) {
            id
            name
            email
        }
    }
`;


export const SIGN_IN_MUTATION = gql`
  mutation SIGN_IN_MUTATION(
        $email: String!
        $password: String!
      ){
        signin(
            email: $email
            password: $password
        ) {
            id
            name
            email
            password
        }
  } 
`;

export const SIGN_OUT_MUTATION = gql`
  mutation SIGN_OUT_MUTATION{
        signout {
            id
            name
            email
            password
        }
  } 
`;