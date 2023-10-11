import React from "react";
import { v4 as uuid } from "uuid";
import { useState } from "react";

function ItemForm({ onItemFormSubmit }) {

  const [formData, setFormData] = useState({
    name: "",
    category: "Produce",
  });
  
  function handleInputChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newItem = {
      id: uuid(),
      name: formData.name,
      category: formData.category,
    };

    onItemFormSubmit(newItem);

    setFormData({
      name: "",
      category: "Produce",
    });
  }

  return (
    <form className='NewItem' onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleInputChange}
        />
      </label>

      <label>
        Category:
        <select
          name='category'
          value={formData.category}
          onChange={handleInputChange}
        >
          <option value='Produce'>Produce</option>
          <option value='Dairy'>Dairy</option>
          <option value='Dessert'>Dessert</option>
        </select>
      </label>

      <button type='submit'>Add to List</button>
    </form>
  );
}

export default ItemForm;