import React from "react";
import { useState, useEffect } from "react";
import NavBar from "../Components/Navbar/NavBar.jsx";
import ItemList from "../Components/ItemList";
import axios from "axios";

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
