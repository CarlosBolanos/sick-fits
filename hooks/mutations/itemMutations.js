import {gql} from '@apollo/client';

export const CREATE_ITEM_MUTATION = gql`
    mutation CREATE_ITEM_MUTATION(
        $title: String!
        $description: String!
        $price: Int!
        $image: String
        $largeImage: String
    ) {
        createItem(
            title: $title
            description: $description
            price: $price
            image: $image
            largeImage: $largeImage
        ) {
            id
        }
    }
`;

export const DELETE_ITEM_MUTATION = gql`
    mutation DELETE_ITEM_MUTATION(
        $id: String!
    ) {
        deleteItem(
            id: $id
        )
    } {
        id
    }
`
