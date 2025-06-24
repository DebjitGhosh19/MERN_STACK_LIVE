import React, { useEffect } from "react";
import Title from "../components/Title";
import { useContext } from "react";
import { ShopContext } from "../context/ShowpContext";

const Orders = () => {
  const { products, currency } = useContext(ShopContext);
  const productCopy = products.slice(0, 4);
  return (
    <div>
      <div className="flex flex-start my-10 text-2xl">
        <Title text1={"My"} text2={"ORDERS"} />
      </div>
      {productCopy.map((item, index) => (
        <div key={index} className="grid grid-cols-1 md:grid-cols-3 md:items-center md:justify-between my-4 border-y-1 border-gray-300 py-3 items-center gap-4">
          <div className="flex  gap-4 items-center"><img src={item.image[0]} alt="" className="h-18" />
          <div className="flex flex-col">
            <h1>{item.name}</h1>
            <div className="flex gap-2">
              <p>
                {currency}
                {item.price}
              </p>
              <p>Quantity:1</p>
              <p>Size:M</p>
              
            </div>
            <p className="text-gray-800">Date <span className="text-gray-400">24,jun,2025</span></p>
          </div></div>
          <div>
            <div className="flex items-center gap-2 text-gray-400 
            md:justify-center">
              <p className="w-3.5 h-3.5 border border-gray-400 rounded-full bg-green-400 "></p>
              <p>Ready to ship</p>
            </div>
          </div>
          <div className=" flex justify-start md:justify-end"><button className="border border-gary-200 px-3 py-1.5 border-gray-400 text-gray-800 cursor-pointer h-10">Track Order</button></div>
        </div>
      ))}
    </div>
  );
};

export default Orders;
