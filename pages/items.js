import React from "react";
import Item from "../components/Item";
import {useGetItems} from '../hooks/itemHooks'

const Items = () => {
  const { loading, error, data } = useGetItems();
  if(loading) return <div>Loading.</div>
  if(error) return <div>Error.</div>

  return <div className="flex flex-wrap">
    {data.items.map(item => <Item key={item.id} item={item} />)}
  </div>
}

export default Items;
