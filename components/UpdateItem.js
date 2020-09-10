import React, { useState } from "react";
import { useGetItemById, useUpdateItem } from "../hooks/itemHooks";

const UpdateItem = ({ id }) => {
  const [item, setItem] = useState({})
  const { data, loading: getItemLoading, error: getItemError } = useGetItemById(id);
  const { updateItem, loading: updateItemLoading, error: updateItemError } = useUpdateItem();
  const inProgress = getItemLoading || updateItemLoading;

  const handleInputChange = ({ target }) => {
    const { name, type, value } = target;
    const val = type === 'number' ? parseFloat(value) : value;
    setItem({ ...item, [name]: val })
  }

  const handleUpdateItem = async (e) => {
    e.preventDefault();
    const itemToBeUpdated = { ...item, id };
    const res = await updateItem({ variables: itemToBeUpdated });
  }

  return <div className="w-full max-w-xs">
    {inProgress && <div>Loading....</div>}
    {(getItemError || updateItemError) && <div> something went wrong </div>}

    {data &&
      <form className="shadow-md rounded p-10" onSubmit={(e) => handleUpdateItem(e)}>
        <fieldset disabled={inProgress} aria-busy={inProgress}>
          <div className="mb-4">
            <label htmlFor="title">Title</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
              type="text" id="title" name="title" placeholder="Title" onChange={handleInputChange} defaultValue={data.item.title} />
          </div>
          <div className="mb-4">
            <label htmlFor="price">Price</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
              type="number" id="price" name="price" placeholder="0.0" required onChange={handleInputChange}
              defaultValue={data.item.price} />
          </div>
          <div className="mb-4">
            <label htmlFor="description">Description</label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
              id="description" name="description" placeholder="Description" required onChange={handleInputChange}
              defaultValue={data.item.description} />
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
    }
  </div>
}

export default UpdateItem;
