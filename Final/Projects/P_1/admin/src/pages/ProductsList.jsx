import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";

const ProductsList = ({token}) => {
  const [data, setdata] = useState([]);
  const fetchList = async () => {
    try {
      const list = await axios.get(backendUrl + "/api/product/list");

      if (list.data.success) {
        setdata(list.data.products);
      } else {
        toast.error(list.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  const deleteProduct = async (id) => {
    try {
      const response = await axios.post(
        backendUrl + '/api/product/remove',
        { id }, // send id in the request body
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success("Product deleted");
        fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div>
      <h1 className="mb-2">All Products List</h1>

      <div>
        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] border border-slate-200  p-2 bg-gray-200 items-center   ">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className="text-center">Action</b>
        </div>
        {data.map((item,index) => (
          <div className="grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] border border-gray-200 items-center p-2 my-2 gap-2 text-sm " key={index}>
            <img src={item.image[0]} alt="" className="w-12" />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>{currency}{item.price}</p>
            <p className="text-right md:text-center cursor-pointer text-lg" onClick={()=>deleteProduct(item._id)}>X</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
