import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { ShopContext } from "../context/ShowpContext";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import CartAmount from "../components/CartAmount";

const Cart = () => {
  const { products, currency, CartItems, updateQuantity,navigate } = useContext(ShopContext);
  const [CartData, setCartData] = useState([]);
  useEffect(() => {
    const tempData = [];
    for (const items in CartItems) {
      for (const item in CartItems[items]) {
        if (CartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: CartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [CartItems]);

  return (
    <div className="border-t pt-14">
      <div className=" text-2xl mb-3 flex flex-start ">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>
      <div >
        {console.log(CartData)
        }
        {CartData.map((item, index) => {
          const productsData = products.find(
            (product) => product._id === item._id
          );
          return (
            <div
              key={index}
              className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
            >
              <div className="flex items-start gap-6">
                <img
                  className="w-16 sm:w-20"
                  src={productsData.image[0]}
                  alt=""
                />
             
                <div >
                  <p className="text-xs sm:text-lg font-medium">
                    {productsData.name}
                  </p>
                  <div className="flex items-center gap-5 mt-2">
                    <p>

                      {currency}
                      {productsData.price}
                    </p>

                    <p className="border px-2 sm:px-3 sm:py-1   bg-slate-50">
                      {item.size}
                    </p>
                  </div>
                  <div>
                  </div>
                </div>
                 </div>
                 <input
                    type="number"
                    className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
                    min={1}
                    defaultValue={item.quantity}
                    onChange={(e)=>e.target.value===''||e.target.value==='0'?null:updateQuantity(item._id,item.size,Number(e.target.value))
                  }
                  />
                  <img className="w-4 mr-4 sm:w-5 cursor-pointer" onClick={()=> updateQuantity(item._id,item.size,0)
                  }
                   src={assets.bin_icon} alt="" />
              </div>
            
          );
        })}
      </div>
    <div className="flex flex-col justify-end my-20 items-end">
        <div className="w-full sm:w-96">
          <CartAmount/>
        </div>
        <button onClick={()=>navigate("/place-order")} className="bg-black text-white px-6 py-3  w-auto text-sm my-6">PROCEED TO CHECKOUT</button>
    </div>
    
    </div>
  );
};

export default Cart;
