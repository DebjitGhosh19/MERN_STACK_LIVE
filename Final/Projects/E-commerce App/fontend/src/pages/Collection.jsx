import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products,search,showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [FilterProducts, setFilterProducts] = useState([]);
  const [category, setcategory] = useState([]);
  const [subCategory, setsubCategory] = useState([]);
  const [sortType, setsortType] = useState("Relevent");
  const togglecategory = (e) => {
    if (category.includes(e.target.value)) {
      setcategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setcategory((prev) => [...prev, e.target.value]);
    }
  };
  const togglesubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setsubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setsubCategory((prev) => [...prev, e.target.value]);
    }
  };
  const applyFilter = () => {
    let productsCopy = products.slice();
    if(showSearch&&search){
      productsCopy=productsCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
    }
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }
    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let fpCopy = FilterProducts.slice();
    switch (sortType) {
      case "Low-high":
        setFilterProducts(fpCopy.sort((a,b) => a.price - b.price));
        break;
      case "High-Low":
        setFilterProducts(fpCopy.sort((a,b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  // useEffect(() => {
  //   setFilterProducts(products);
  // }, []);
  useEffect(() => {
    applyFilter();
  }, [category, subCategory,search,showSearch]);
  useEffect(() => {
    sortProduct();
  }, [sortType]);
  return (
    <div className="flex flex-col sm:flex-row gap-1 pt-10 sm:gap-10 border-t ">
      {/* Filter Options */}
      <div className="min-w-60 ">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <img
            className={`h-3  sm:hidden ${showFilter ? "rotate-90" : ""}`}
            src={assets.dropdown_icon}
            alt=""
          />
        </p>
        {/* category Filter */}
        <div
          className={`border border-gray-300  pl-5 py-3 ${
            showFilter ? "" : "hidden"
          } sm:block `}
        >
          <p className="mb-3 text-sm font-medium">CATAGORIES</p>
          <div className="flex flex-col gap-2 font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value="Men"
                onChange={togglecategory}
              />
              Men
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value="Women"
                onChange={togglecategory}
              />
              Women
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value="Kids"
                onChange={togglecategory}
              />
              Kids
            </p>
          </div>
        </div>
        {/* subCategory Filter*/}
        <div
          className={`border border-gray-300  pl-5 py-3 my-5 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col font-light text-gray-700 gap-2">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value="Topwear"
                onChange={togglesubCategory}
              />
              Topwear
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value="Bottomwear"
                onChange={togglesubCategory}
              />
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value="Winterwear"
                onChange={togglesubCategory}
              />
              Winterwear
            </p>
          </div>
        </div>
      </div>
      {/* Products */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl  mb-4">
          <Title text1={"ALL"} text2={"COLLECTION"} />
          {/* Product Short */}
          <select
            className="border border-gray-300 px-2 text-sm "
            onChange={(e) => setsortType(e.target.value)}
          >
            <option value="Relevent">Short by: Relevent</option>
            <option value="Low-high">Short by: Low to High</option>
            <option value="High-Low">Short by: High to Low</option>
          </select>
        </div>
        <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {FilterProducts.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
