import Router from "next/router";
import React, { useState } from "react";
import { useCreateItem } from "../hooks/itemHooks";

const CreateItem = () => {
  const [item, setItem] = useState({
    title: "item",
    description: "item description",
    price: 20,
    image: "",
    largeImage: "",
  });
  const { createItem, loading, error, result } = useCreateItem();
  const [formLoading, setFormLoading] = useState(false);
  const inProgress = loading || formLoading;

  if (result) {
    Router.push({
      pathname: "/items/item",
      query: { id: result.id },
    });
  }

  const handleInputChange = ({ target }) => {
    const { name, type, value } = target;
    const val = type === "number" ? parseFloat(value) : value;
    setItem({ ...item, [name]: val });
  };

  const handleUploadFile = async (e) => {
    setFormLoading(true);
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "sickfits");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/garrison/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    setFormLoading(false);
    const { secure_url, eager } = await res.json();
    setItem({ ...item, image: secure_url, largeImage: eager[0].secure_url });
  };

  return (
    <div className="w-full max-w-xs">
      {inProgress && <div>Loading....</div>}
      {error && (
        <div className="text-red-300"> something went wrong, try again!</div>
      )}
      {item.image && <img src={item.image} alt={item.title} />}
      <form
        className="shadow-md rounded p-10"
        onSubmit={(e) => {
          e.preventDefault();
          createItem({ variables: { ...item } });
        }}
      >
        <fieldset disabled={inProgress} aria-busy={inProgress}>
          <div className="mb-4">
            <label htmlFor="title">Title</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
              type="text"
              id="title"
              name="title"
              placeholder="Title"
              onChange={handleInputChange}
              value={item.title}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="price">Price</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
              type="number"
              id="price"
              name="price"
              placeholder="0.0"
              required
              onChange={handleInputChange}
              value={item.price}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description">Description</label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
              id="description"
              name="description"
              placeholder="Description"
              required
              onChange={handleInputChange}
              value={item.description}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="image">Price</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
              type="file"
              id="file"
              name="image"
              placeholder="Please upload an image"
              onChange={handleUploadFile}
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-red-500 hover:bg-white hover:text-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
            <button
              className="inline-block align-baseline font-bold text-sm text-red-500 hover:text-red-800"
              type="reset"
            >
              Reset
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default CreateItem;
