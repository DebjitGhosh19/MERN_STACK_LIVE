import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export const ShopContext = createContext();
const ShopContextProvider = (props) => {
  const delevery_fee = 50;
  const currency = "₹";
  const backend_Url = import.meta.env.VITE_Backend_Url;
  const [Search, setSearch] = useState("");
  const [ShowSearch, setShowSearch] = useState(false);
  const [CartItems, setCartItems] = useState({});
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Select Product Size");
      return;
    }
    let cartData = structuredClone(CartItems);
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);
    if (token) {
      try {
        await axios.post(
          backend_Url + "/api/cart/add",
          { itemId, size },
          { headers: { token } }
        );
      } catch (error) {
        console.log(error.message);
        toast.error(error.message);
      }
    }
  };
  const getCartData = () => {
    let totalCount = 0;
    for (const items in CartItems) {
      for (const item in CartItems[items]) {
        try {
          if (CartItems[items][item] > 0) {
            totalCount += CartItems[items][item];
          }
        } catch (error) {
          console.log(error.message);
          toast.error(error.message);
        }
      }
    }
    return totalCount;
  };
  const updateQuantity = async (itemId, size, quantity) => {
    
    let cartData = structuredClone(CartItems);
    cartData[itemId][size] = quantity;
    setCartItems(cartData);
    if (token) {
      try {
        await axios.post(
          backend_Url+
          "/api/cart/update",
          { itemId, size, quantity },
          { headers: { token } }
        );
      } catch (error) {
        console.log(error.message);
        toast.error(error.message);
      }
    }
  };
  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in CartItems) {
      let productInfo = products.find((products) => products._id === items);
      for (const item in CartItems[items]) {
        if (CartItems[items][item] > 0) {
          totalAmount += productInfo.price * CartItems[items][item];
        }
      }
    }
    return totalAmount;
  };
  const getProduct = async () => {
    try {
      const response = await axios.get(backend_Url + "/api/product/list");
      if (response.data.success) {
        setProducts(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  const getUserCart=async (token) => {
    try {
      const response=await axios.post(backend_Url+'/api/cart/get',{},{headers:{token}});
      if (response.data.success) {
        setCartItems(response.data.cartData)
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }
  useEffect(() => {
    getProduct();
  }, []);

  useEffect(() => {
    if (!token && localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
      getUserCart(localStorage.getItem("token"))
    }
  }, []);

  const value = {
    products,
    delevery_fee,
    currency,
    Search,
    setSearch,
    ShowSearch,
    setShowSearch,
    addToCart,
    CartItems,
    getCartData,
    updateQuantity,
    getCartAmount,
    navigate,
    backend_Url,
    token,
    setToken,
  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};
export default ShopContextProvider;
