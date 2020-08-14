import React, { useState } from "react";
import Router from 'next/router';
import {gql, useMutation} from '@apollo/client';

const CREATE_ITEM_MUTATION = gql`
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

const CreateItem = () => {
  const [item, setItem] = useState({title: 'item', description: 'item description', price:20, image:'', largeImage:'' })
  const [createItemMutation, {loading, error, data, called}] = useMutation(CREATE_ITEM_MUTATION);

  if(data){
    const {createItem} = data;
    if(createItem){
      Router.push({
        pathname: '/item',
        query: { id: createItem.id }
      })
    }
  }

  const handleInputChange = ({target}) => {
    const {name, type, value} = target;
    const val = type === 'number'? parseFloat(value): value;
    setItem({...item, [name]: val})
  }

  return <div className="w-full max-w-xs">
    {error &&
    <div> something went wrong, try again!
      {error}
    </div>}
    {loading && <div>Loading....</div>}
    <form className="shadow-md rounded p-10" onSubmit={(e) => {
      e.preventDefault();
      createItemMutation({ variables: {...item} });
    }}>
      <fieldset disabled={loading} aria-busy={loading}>
        <div className="mb-4">
          <label htmlFor="title">Title</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
            type="text" id="title" name="title" placeholder="Title" onChange={handleInputChange} value={item.title}/>
        </div>
        <div className="mb-4">
          <label htmlFor="price">Price</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
            type="number" id="price" name="price" placeholder="0.0" required onChange={handleInputChange}
            value={item.price}/>
        </div>
        <div className="mb-4">
          <label htmlFor="description">Description</label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
            id="description" name="description" placeholder="Description" required onChange={handleInputChange}
            value={item.description}/>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-red-500 hover:bg-white hover:text-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit">
            Submit
          </button>
          <button className="inline-block align-baseline font-bold text-sm text-red-500 hover:text-red-800"
                  type="reset">
            Reset
          </button>
        </div>
      </fieldset>
    </form>
  </div>
}

export default CreateItem;
