import React, { useState } from "react";

// Import images properly if using Webpack/Vite
import item1 from "./images/item-1.jpeg";
import item2 from "./images/item-2.jpeg";
import item3 from "./images/item-3.jpeg";
import item4 from "./images/item-4.jpeg";
import item5 from "./images/item-5.jpeg";
import item6 from "./images/item-6.jpeg";
import item7 from "./images/item-7.jpeg";
import item8 from "./images/item-8.jpeg";
import item9 from "./images/item-9.jpeg";

// Menu Data
const MENU_DATA = [
  {
    id: 1,
    title: "Buttermilk Pancakes",
    category: "breakfast",
    price: 15.99,
    img: item1,
    desc: "Delicious pancakes with syrup and butter.",
  },
  {
    id: 2,
    title: "Diner Double",
    category: "lunch",
    price: 13.99,
    img: item2,
    desc: "Juicy double cheeseburger with fries.",
  },
  {
    id: 3,
    title: "Godzilla Milkshake",
    category: "shakes",
    price: 6.99,
    img: item3,
    desc: "A huge chocolate milkshake with toppings.",
  },
  {
    id: 4,
    title: "Country Delight",
    category: "breakfast",
    price: 20.99,
    img: item4,
    desc: "Classic country-style breakfast plate.",
  },
  {
    id: 5,
    title: "Egg Attack",
    category: "lunch",
    price: 22.99,
    img: item5,
    desc: "Egg and bacon sandwich with special sauce.",
  },
  {
    id: 6,
    title: "Oreo Dream",
    category: "shakes",
    price: 18.99,
    img: item6,
    desc: "Oreo-flavored milkshake with whipped cream.",
  },
  {
    id: 7,
    title: "Bacon Overflow",
    category: "breakfast",
    price: 8.99,
    img: item7,
    desc: "Crispy bacon served with scrambled eggs.",
  },
  {
    id: 8,
    title: "American Classic",
    category: "lunch",
    price: 12.99,
    img: item8,
    desc: "Classic American burger with cheddar cheese.",
  },
  {
    id: 9,
    title: "Quarantine Buddy",
    category: "shakes",
    price: 16.99,
    img: item9,
    desc: "Strawberry shake with marshmallow topping.",
  },
];

const Menu = () => {
  const [list, setList] = useState(MENU_DATA);

  // Filter Function
  const onFilter = (category) => {
    if (category === "all") {
      setList(MENU_DATA);
    } else {
      const matches = MENU_DATA.filter((item) => item.category === category);
      setList(matches);
    }
  };

  return (
    <div data-test-id="main" id="main">
      <h1>Our Menu</h1>

      {/* Filter Buttons */}
      <div>
        <button id="filter-btn-0" onClick={() => onFilter("all")}>
          All
        </button>
        <button id="filter-btn-1" onClick={() => onFilter("breakfast")}>
          Breakfast
        </button>
        <button id="filter-btn-2" onClick={() => onFilter("lunch")}>
          Lunch
        </button>
        <button id="filter-btn-3" onClick={() => onFilter("shakes")}>
          Shakes
        </button>
      </div>

      {/* Menu List */}
      <div>
        {list.map((item) => (
          <div
            key={item.id}
            data-test-id={`menu-item-${item.category}`}
            style={{ border: "1px solid #ddd", padding: "10px", margin: "10px" }}
          >
            <div>
              <img src={item.img} alt={item.title} style={{ width: "150px", borderRadius: "5px" }} />
            </div>
            <div>
              <div>
                <span style={{ fontWeight: "bold" }}>{item.title}</span>
                <span style={{ marginLeft: "10px", color: "green" }}>${item.price}</span>
              </div>
              <div>{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
