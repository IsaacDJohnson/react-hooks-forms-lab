import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [itemsList, setItemsList] = useState(items);

  function handleSearchChange(newSearchText) {
    setSearch(newSearchText);
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemDisplay = itemsList.filter((item) => {
    if (selectedCategory === "All") {
      return item.name.toLowerCase().includes(search.toLowerCase());
    } else {
      return (
        item.category === selectedCategory &&
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
  });
  
  function handleItemFormSubmit(newItem) {
    setItemsList([...itemsList, newItem]);
  }


  return (
    <div className='ShoppingList'>
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <Filter
        onCategoryChange={handleCategoryChange}
        onSearchChange={handleSearchChange}
        search={search}
      />
      <ul className='Items'>
        {itemDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;