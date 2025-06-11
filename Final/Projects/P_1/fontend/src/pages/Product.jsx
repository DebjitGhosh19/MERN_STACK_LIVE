import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShowpContext";

const Product = () => {
  const { productId } = useParams();
  const {products,currency } = useContext(ShopContext);
  const [ProductItems, setProductItems] = useState(false)
  
const filterData=async()=>{
  products.map((item)=>{
if (productId==item._id) {
  setProductItems(item);
  console.log(ProductItems);
  

  
}
return null;
  })

}
useEffect(() => {
  filterData()
}, [ProductItems,products])

  return <div className="flex flex-col sm:flex-col">
    <div>
    {
      ProductItems.image.map((item,index)=>(
        <img src={item[0]} alt="" />
      ))
    }
    </div>
  </div>;
};

export default Product;
