import React from "react";
import Item from "../../components/Item";
import Pagination from "../../components/Pagination";
import { useGetItems } from "../../hooks/itemHooks";
import { useMe } from "../../hooks/userHooks";
import { usePageProps } from "../../hooks/appHooks";

const Items = () => {
  const { query } = usePageProps();
  const first = 6;
  const currentPage = parseInt(query?.page || 1);
  const skip = (currentPage - 1) * first;
  const { loading, error, data } = useGetItems(skip, first);

  if (loading) return <div>Loading.</div>;
  if (error) return <div>Error.</div>;

  return (
    <div>
      <Pagination query={query} />
      <div className="flex flex-wrap">
        {data.items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
      <Pagination query={query} />
    </div>
  );
};

export default Items;
