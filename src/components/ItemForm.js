import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [itemCategory, setItemCategory] = useState("Produce");
  function handleCategoryChange(e) {
    setItemCategory(e.target.value);
  }

  const [itemName, setItemName] = useState("");
  function handleNameChange(e) {
    setItemName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onItemFormSubmit({
      id: uuid(),
      name: itemName,
      category: itemCategory
    });
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleNameChange} />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
