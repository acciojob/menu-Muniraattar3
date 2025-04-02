import React, { useState } from "react";
import Menu from "./components/Menu";
import "./styles.css";

const menuItems = [
  { id: 1, name: "Pancakes", category: "Breakfast", price: "$5", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Burger", category: "Lunch", price: "$8", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Milkshake", category: "Shakes", price: "$4", image: "https://via.placeholder.com/150" },
  { id: 4, name: "Omelette", category: "Breakfast", price: "$6", image: "https://via.placeholder.com/150" },
  { id: 5, name: "Steak", category: "Lunch", price: "$15", image: "https://via.placeholder.com/150" },
  { id: 6, name: "Chocolate Shake", category: "Shakes", price: "$5", image: "https://via.placeholder.com/150" }
];

const App = () => {
  const [items, setItems] = useState(menuItems);
  const [activeCategory, setActiveCategory] = useState("All");

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "All") {
      setItems(menuItems);
    } else {
      setItems(menuItems.filter(item => item.category.toLowerCase() === category.toLowerCase()));
    }
  };

  return (
    <div id="main" className="app">
      <h1>Our Menu</h1>
      <div>
        <button id="filter-btn-0" onClick={() => filterItems("All")}>All</button>
        <button id="filter-btn-1" onClick={() => filterItems("Breakfast")}>Breakfast</button>
        <button id="filter-btn-2" onClick={() => filterItems("Lunch")}>Lunch</button>
        <button id="filter-btn-3" onClick={() => filterItems("Shakes")}>Shakes</button>
      </div>
      <Menu items={items} />
    </div>
  );
};

export default App;
