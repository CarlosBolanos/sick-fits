import React, { useState } from "react";
import {Mutation} from "react-apollo";
import gql from "graphql-tag";
import formatMoney from "../lib/formatMoney";

const CreateItem = () => {
  const [item, setItem] = useState({title: '', description: '', price:0, image:'', largeImage:'' })

  const handleInputChange = (event) => {
    setItem({...item, [event.target.name]: event.target.value})
  }

  return <div>
    <div>
      <fieldset>
        <label htmlFor="title">
          Title
          <input type="text" id="title" name="title" placeholder="Title" required
                 onChange={handleInputChange} value={item.title} />
        </label>
      </fieldset>
    </div>
  </div>
}

export default CreateItem;
