import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import NavBar from "../Components/Navbar/NavBar.jsx";
import ItemList from "../Components/ItemList";

const HomePage = () => {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const response = await axios.get(
      "https://fakestoreapi.com/products?limit=12"
    );
    console.log(response.data);

    setItems(response.data);
  };
  useEffect(() => fetchItems, []);

  return (
    <div>
      <NavBar />
      <ItemList item={items} />
    </div>
  );
};

export default HomePage;
