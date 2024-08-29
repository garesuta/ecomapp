import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../Components/Navbar/NavBar.jsx";
import ItemList from "../Components/ItemList.jsx";

const HomePage = () => {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products?limit=12"
      );
      setItems(response.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  useEffect(() => {
    fetchItems(); // Corrected this line to actually call the function
    console.log(111);
  }, []);

  return (
    <div>
      <NavBar />
      <ItemList item={items} /> {/* Corrected 'item' to 'items' */}
    </div>
  );
};

export default HomePage;
