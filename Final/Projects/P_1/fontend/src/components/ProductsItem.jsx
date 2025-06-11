import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../context/ShowpContext";
const ProductsItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link className="cursor-pointer text-gray-700" to={`/product/${id}`}>
      <div className="overflow-hidden ">
        <img
          className="transition ease-in-out  hover:scale-110"
          src={image[0]}
          alt=""
        />
      </div>
      <p className="text-sm  pt-3 pb-1">{name}</p>
      <p className="text-sm font-medium">
        {currency}
        {price}
      </p>
    </Link>
  );
};

export default ProductsItem;
