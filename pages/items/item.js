import React from "react";
import SingleItem from "../../components/SingleItem";
import { useGetItemById } from "../../hooks/itemHooks";

const Item = ({ query }) => {
  const { loading, error, data } = useGetItemById(query.id);
  if (loading) return <div>Loading.</div>;
  if (error) return <div>Error.</div>;

  return data ? <SingleItem item={data.item} /> : null;
};

export default Item;
