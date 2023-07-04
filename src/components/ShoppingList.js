import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  
  const [search, setSearch] = useState("");
  function onSearchChange(e) {
    setSearch(e.target.value);
    console.log(search);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  const searchItemsToDisplay = itemsToDisplay.filter((item) => {
    if (search === "") return true;

    return (item.name.includes(search));
  });
  // || item.name.contains(search)

  return (
    <div className="ShoppingList">
      <ItemForm items={items} onItemFormSubmit={onItemFormSubmit}/>
      <Filter
        onSearchChange={onSearchChange}
        onCategoryChange={handleCategoryChange}
        search={search}
      />
      <ul className="Items">
        {searchItemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
