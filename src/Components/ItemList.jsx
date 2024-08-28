import React from "react";
import ProductCard from "./Product.jsx";

const ItemList = ({ item }) => {
  const renderedItems = item.map((item) => {
    return <ProductCard key={item.id} {...item} />;
  });
  return (
    <div className="grid grid-cols-3 m-[30px] place-content-center">
      {renderedItems}
    </div>
  );
};

export default ItemList;
