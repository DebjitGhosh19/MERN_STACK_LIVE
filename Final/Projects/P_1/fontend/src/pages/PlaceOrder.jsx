import React, { useContext, useState } from "react";
import Title from "../components/Title";
import CartAmount from "../components/CartAmount";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShowpContext";

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod');
  const {navigate} = useContext(ShopContext)
  return (
    <div className="">
      <hr className="border border-gray-200" />
      <div className="flex flex-start pt-14 text-2xl sm:text-3xl">
        <Title text1={"DELIVERY"} text2={"INFORMATION"} />
      </div>

      <div className="flex flex-col gap-4 justify-between sm:flex-row">
        <form className="flex w-full sm:max-w-[560px] flex-col gap-4  pt-10">
          <div className="flex w-full gap-4">
            <input
              className="border border-gray-300 rounded w-1/2 px-4 py-2  font-medium text-gray-500"
              type="text"
              placeholder="First name"
            />
            <input
              className="border border-gray-300 rounded w-1/2 px-4 py-2 font-medium text-gray-500"
              type="text"
              placeholder="Last name"
            />
          </div>
          <input
            type="email"
            placeholder="Email address"
            className="w-full border border-gray-300 rounded  px-4 py-2 font-medium text-gray-500"
          />
          <input
            type="text"
            placeholder="Street"
            className="w-full border border-gray-300 rounded  px-4 py-2 font-medium text-gray-500"
          />
          <div className="flex w-full gap-4">
            <input
              className="border border-gray-300 rounded w-1/2 px-4 py-2  font-medium text-gray-500"
              type="text"
              placeholder="City"
            />
            <input
              className="border border-gray-300 rounded w-1/2 px-4 py-2 font-medium text-gray-500"
              type="text"
              placeholder="State"
            />
          </div>
          <div className="flex w-full gap-4">
            <input
              className="border border-gray-300 rounded w-1/2 px-4 py-2  font-medium text-gray-500"
              type="number"
              placeholder="Zipcode"
            />
            <input
              className="border border-gray-300 rounded w-1/2 px-4 py-2 font-medium text-gray-500"
              type="text"
              placeholder="Country"
            />
          </div>
          <input
            type="number"
            placeholder="Phone"
            className="w-full border border-gray-300 rounded  px-4 py-2 font-medium text-gray-500"
          />
        </form>
        <div className="flex flex-col w-full sm:max-w-[560px] pt-14 sm:pt-6">
          <div className="flex w-full">
            <CartAmount />
          </div>
          <div className="flex flex-col ">
            <div className="flex flex-start pt-8">
              <Title text1={"PAYMENT"} text2={"METHOD"} />
            </div>
            <div className="flex flex-col lg:flex-row mt-4 gap-3">
              <div onClick={()=>setMethod('stripe')} 
                className="flex border p-2 px-3 items-center  gap-4 cursor-pointer border-gray-100
              "
              >
                <p className={`min-w-3.5 min-h-3.5 border  rounded-full border-gray-100 ${method==='stripe'?'bg-green-400':''}`}></p>
                <img className="h-5"  src={assets.stripe_logo} alt="" />
              </div>
             <div onClick={()=>setMethod('razorpay')}
                className="flex border p-2 px-3 items-center gap-4 cursor-pointer border-gray-100
              "
              >
                <p  className={`min-w-3.5 min-h-3.5 border  rounded-full border-gray-100 ${method==='razorpay'?'bg-green-400':''}`}></p>
                <img className="h-5"  src={assets.razorpay_logo} alt="" />
              </div>
              <div onClick={()=>setMethod('cod')}
                className="flex border p-2 px-3 items-center  gap-4 cursor-pointer border-gray-100
              "
              >
                <p className={`min-w-3.5 h-3 border  rounded-full border-gray-100 ${method==='cod'?'bg-green-400':''}`}></p>
                <p className="text-gray-500 font-medium">CASH ON DELIVERY</p>
              </div>
             
            </div>
          </div>
          <div className="flex justify-end pt-8">
            <button onClick={()=>navigate("/orders")} className="bg-black text-white text-center px-12 py-2 cursor-pointer">PLACE ORDER</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
