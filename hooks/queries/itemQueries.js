import {gql } from '@apollo/client';

export const GET_ITEM = gql`
    query GET_ITEM($id: ID!) {
        item(where: {id: $id}) {
            id
            title
            price
            description
        }
    }
`;

export const ALL_ITEMS_QUERY = gql`
    query ALL_ITEMS_QUERY {
        items {
            id
            title
            price
            description
            image
            largeImage
        }
    }
`;
