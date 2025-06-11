import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShowpContext"
import Title from "./Title"
import ProductsItem from "./ProductsItem";
const BestSeller = () => {
  const {products} = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([])

  useEffect(() => {
  const bestProduct=(products.filter((item)=>(item.bestseller)))
  setBestSeller(bestProduct.slice(0, 5))
  }, [])
 
  
  return (
    <div className="my-10">
      <Title text1={"Best"} text2={"Sellers"}/>
      <p className="w-3/4 m-auto text-center text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error repellat recusandae exercitationem voluptatum quisquam aut. </p>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 gap-y-6 mt-10">
 {
     bestSeller.map((item, index) => {
        return <ProductsItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
      })
 }
    </div>
    </div>
  )
}

export default BestSeller