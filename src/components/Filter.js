import React from "react";
import { useState } from "react";

function Filter({ onCategoryChange, onSearchChange, search }) {

  const [, setSearch] = useState("");

  function handleSearchChange(e) {
    const searchText = e.target.value;
    setSearch(searchText);
    onSearchChange(searchText);
  }

  return (
    <div className='Filter'>
      <input
        type='text'
        name='search'
        placeholder='Search...'
        value={search}
        onChange={handleSearchChange}
      />
      <select name='filter' onChange={onCategoryChange}>
        <option value='All'>Filter by category</option>
        <option value='Produce'>Produce</option>
        <option value='Dairy'>Dairy</option>
        <option value='Dessert'>Dessert</option>
      </select>
    </div>
  );
}

export default Filter;