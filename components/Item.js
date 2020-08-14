import React from "react";
import Link from 'next/link';
import formatMoney from '../lib/formatMoney'

const Item = ({item}) => {
  const {id, title, description, image} = item;
  const defaultImage = 'https://via.placeholder.com/400'
  return <div className="item" key={id}>
    <img src={image || defaultImage} alt={title} />
    <div className="title">
      <Link href={{pathname: '/item', query: {id: item.id}}}>
        <a>{title}</a>
      </Link>
    </div>
    <div className="price-tag">{formatMoney(item.price)}</div>
    <p>{description}</p>
    <div className="buttonList">
      <Link href={{
        pathname: '/update',
        query: { id: item.id }
      }}>
        <a>Edit</a>
      </Link>
      <button>Add to cart</button>
      <button>Delete</button>
    </div>
  </div>
}

export default Item;
