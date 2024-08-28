import React from "react";
import ProductCard from "./Product";
import { useShoppingCart } from "../Context/ShoppingCartContext";

const ItemList = ({ item }) => {
  const { cartItem } = useShoppingCart();
  console.log(cartItem);

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
