import React from "react";
import {gql, useQuery} from '@apollo/client';
import Item from "../components/Item";

const ALL_ITEMS_QUERY = gql`
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

const Items = () => {
  const { loading, error, data } = useQuery(ALL_ITEMS_QUERY);

  if(loading) return <div>Loading.</div>
  if(error) return <div>Error.</div>

  return <div>
    {data.items.map(item => <Item key={item.id} item={item} />)}
  </div>
}

export default Items;
