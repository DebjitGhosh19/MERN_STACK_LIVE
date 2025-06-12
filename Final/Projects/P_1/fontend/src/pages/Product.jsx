import React, { useState } from "react";
import { useContext } from "react";
import { ShopContext } from "../context/ShowpContext";
import { useParams } from "react-router";
import { useEffect } from "react";
import { assets } from "../assets/assets";

const Product = () => {
  const { products, currency } = useContext(ShopContext);
  const { productId } = useParams();
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [Size, setSize] = useState('')

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };
  useEffect(() => {
    fetchProductData();
  }, [products, productId]);

  return productData ? (
    <div className="flex flex-col sm:flex-row gap-12  pt-10 border-t-1 border-gray-400 transition-opacity ease-in duration-500 opacity-100">
      {/* Product Data */}
      <div className=" flex flex-col-reverse flex-1 sm:flex-row  my-5 w-full gap-3">
        <div className="flex  sm:flex-col w-full  sm:w-[18%] justify-between sm:justify-normal overflow-x-auto overflow-y-scroll gap-2 ">
          {productData.image.map((item, index) => (
            <img
              className=" w-24  sm:w-32"
              onClick={() => setImage(item)}
              key={index}
              src={item}
              alt=""
            />
          ))}
        </div>
        <div className=" w-full sm:w-[75%] ">
          <img className="w-full  h-auto" src={image} alt="" />
        </div>
      </div>
{/* Product Info */}
      <div className="flex flex-1  w-full my-5 flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-medium ">{productData.name}</h1>
          <div className="flex gap-1 items-center">
            <img className="w-3" src={assets.star_icon} alt="" />
            <img className="w-3" src={assets.star_icon} alt="" />
            <img className="w-3" src={assets.star_icon} alt="" />
            <img className="w-3" src={assets.star_icon} alt="" />
            <img className="w-3" src={assets.star_dull_icon} alt="" />
            <p className="pl-2">(122)</p>
          </div>
        </div>
        <p className="font-bold text-2xl">
          {currency}
          {productData.price}
        </p>
        <p className="text-gray-500 md:w-4/5">{productData.description}</p>
        <div className="flex flex-col gap-2">
          <p className="text-xl font-medium">Select Size</p>
          <div className="flex gap-2 ">
            {
            productData.sizes.map((item,index)=>(
              <button key={index} onClick={()=>setSize(item)} className={ `cursor-pointer bg-gray-200 px-3 py-2 ${item==Size?' border border-orange-400':""}`}>{item}</button>
            ))
          }
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
