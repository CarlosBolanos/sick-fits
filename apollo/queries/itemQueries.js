import { gql } from "@apollo/client";

export const GET_ITEM = gql`
  query GET_ITEM($id: ID!) {
    item(where: { id: $id }) {
      id
      title
      price
      description
      image
      largeImage
      user {
        id
      }
    }
  }
`;

export const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY($skip: Int = 0, $first: Int) {
    items(skip: $skip, first: $first, orderBy: createdAt_DESC) {
      id
      title
      price
      description
      image
      largeImage
      user {
        id
      }
    }
  }
`;

export const GET_ITEMS_PAGINATED_QUERY = gql`
  query GET_ITEMS_PAGINATED_QUERY {
    itemsConnection {
      aggregate {
        count
      }
    }
  }
`;
