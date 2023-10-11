import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [darkModeCheck, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((darkModeCheck) => !darkModeCheck);
  }

  return (
    <div className={"App " + (darkModeCheck ? "dark" : "light")}>
      <Header darkModeCheck={darkModeCheck} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList items={items} />
    </div>
  );
}

export default App;