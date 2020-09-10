import React from "react";
import SingleItem from "../../components/SingleItem";
import { useGetItemById } from "../../hooks/itemHooks";
import { usePageProps } from "../../hooks/appHooks";

const Item = () => {
  const { query } = usePageProps();
  const { loading, error, data } = useGetItemById(query.id);
  if (loading) return <div>Loading.</div>;
  if (error) return <div>Error.</div>;

  return data ? <SingleItem item={data.item} /> : null;
};

export default Item;
