import React, { useState } from "react";
import { useContext } from "react";
import { ShopContext } from "../context/ShowpContext";
import { useParams } from "react-router";
import { useEffect } from "react";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

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
        console.log(item);
        
        setImage(item.image[0]);
        return null;
      }
    });
  };
  useEffect(() => {
    fetchProductData();
  }, [products, productId]);

  return productData ? (
    <>
  
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
          <button className="bg-black w-38 text-white px-4 py-2 mt-4 active:bg-gray-700">ADD TO CART</button>
          <hr className="my-4 border-gray-200"/>
          <div className="text-gray-400 flex flex-col  text-sm">
            <p>100% Origianl product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days</p>
          </div>
      </div>
    </div>
    <div className="mt-20">
          <div className="flex text-sm ">
          <p className="border px-4 py-2 border-gray-300 font-bold">Descripion</p>
          <p className="border px-4 py-2 border-gray-300">Reviews(122)</p>
          </div>
          <div className="border p-6 border-gray-300 flex flex-col gap-4 text-gray-500 text-sm">
            <p>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.</p>
            <p>E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.</p>
          </div>
          <RelatedProducts subCategory={productData.subCategory} category={productData.category}/>
    </div>
      </>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
