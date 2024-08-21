import React from "react";
import Product from "./Product";

const ItemList = ({ item }) => {
  const renderedItems = item.map((item) => {
    return <Product key={item.id} item={item} />;
  });
  return <div className="grid grid-cols-4">{renderedItems}</div>;
};

export default ItemList;
