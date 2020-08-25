import React from "react";
import Link from 'next/link';
import formatMoney from '../lib/formatMoney';
import { useDeleteItem } from "../hooks/itemHooks";


const Item = ({ item }) => {
  const { deleteItem, loading: deleteLoading, error: errorLoading, result: deleteResult } = useDeleteItem();

  const { id, title, description, image } = item;
  const defaultImage = 'https://via.placeholder.com/400';

  return <div className="max-w-sm rounded shadow-lg m-5" key={id}>
    <img className="w-full" src={image || defaultImage} alt={title} />
    <div className="px-6 py-4 text-gray-700">
      <div className="mb-2">
        <Link href={{ pathname: '/item', query: { id: item.id } }}>
          <a className="font-bold text-xl mb-2">{title}</a>
        </Link>
        <span className="float-right mr-1">{formatMoney(item.price)}</span>
      </div>

      <p className="text-gray-700 text-base">{description}</p>
    </div>
    <div className="grid grid-cols-3 text-center divide-x divide-gray-200 text-gray-700">
      <Link href={{
        pathname: '/update',
        query: { id: item.id }
      }}>
        <a>Edit</a>
      </Link>
      <button>Add to cart</button>
      <button onClick={() => {
        confirm('are you sure you want to delete this item?')
          ? deleteItem({ variables: { id: item.id } })
          : null;
      }
      }>Delete</button>
    </div>
  </div >
}

export default Item;
