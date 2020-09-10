import { gql } from '@apollo/client';

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