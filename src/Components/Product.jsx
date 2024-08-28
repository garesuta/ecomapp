import React from "react";
import { useShoppingCart } from "../Context/ShoppingCartContext.jsx";

const ProductCard = ({ ...item }) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(item.id);

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow  flex flex-col justify-end mt-[10px]">
      <div className="flex flex-col justify-around items-center">
        <a href="#">
          <img
            className="p-8 rounded-t-lg max-h-[300px]"
            src={item.image}
            alt="product image"
          />
        </a>
      </div>
      <div className="px-5 pb-5 h-[60px] flex items-center justify-center">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">
            {item.title}
          </h5>
        </a>
      </div>
      <div className="px-5 pb-5">
        <div className="flex items-center justify-between flex-wrap">
          <div>
            <span className="text-3xl font-bold text-gray-900 ">
              ${item.price}
            </span>
          </div>
          <div className="flex justify-around w-[50%]">
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => decreaseCartQuantity(item.id)}
                className="group rounded-[40px] border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center  transition-all duration-500 bg-red-400 hover:bg-red-600  hover:border-gray-300 focus-within:outline-gray-300"
              >
                <svg
                  className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.5 9.5H13.5"
                    stroke=""
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <span className="bg-white font-semibold w-[15px] place-content-center">
                {quantity}
              </span>
              <button
                onClick={() =>
                  increaseCartQuantity(
                    item.id,
                    item.price,
                    item.title,
                    item.image
                  )
                }
                className="group rounded-[40px] border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center transition-all duration-500 bg-blue-600 hover:bg-blue-900  hover:border-gray-300 focus-within:outline-gray-300"
              >
                <svg
                  className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.75 9.5H14.25M9 14.75V4.25"
                    stroke=""
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                onClick={() => removeFromCart(item.id)}
                className="rounded-[40px] group border border-grey flex items-center justify-center p-0.5 focus-within:outline-red-500 transition-all duration-500 bg-red-100 hover:bg-red-400"
              >
                <svg
                  className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.1673 13.5997V12.5923C14.1673 11.8968 14.7311 11.333 15.4266 11.333H18.5747C19.2702 11.333 19.834 11.8968 19.834 12.5923V13.5997M19.834 13.5997C19.834 13.5997 14.6534 13.5997 11.334 13.5997C6.90804 13.5998 27.0933 13.5998 22.6673 13.5997C21.5608 13.5997 19.834 13.5997 19.834 13.5997ZM12.4673 13.5997H21.534V18.8886C21.534 20.6695 21.534 21.5599 20.9807 22.1131C20.4275 22.6664 19.5371 22.6664 17.7562 22.6664H16.2451C14.4642 22.6664 13.5738 22.6664 13.0206 22.1131C12.4673 21.5599 12.4673 20.6695 12.4673 18.8886V13.5997Z"
                    stroke="#EF4444"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
