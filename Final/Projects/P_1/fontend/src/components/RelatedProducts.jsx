import React, { useEffect, useState } from 'react'
import Title from '../components/Title'
import { useContext } from 'react'
import { ShopContext } from '../context/ShowpContext'
import ProductsItem from './ProductsItem'
const RelatedProducts = ({category,subCategory}) => {
  const {products}=useContext(ShopContext)
  const [RelatedProduct, setRelatedProduct] = useState([])
  useEffect(() => {
    if (products.length>0) {
         let productCopy=products.slice();
        productCopy=productCopy.filter((item)=>item.category===category);
        productCopy=productCopy.filter((item)=>item.subCategory===subCategory);
        setRelatedProduct(productCopy.slice(0,5))
    }
 
  }, [products])
  
  return (
    <div className='mt-24'>
      <Title className='text-7xl'  text1={"RELATED"} text2={"PRODUCTS"}/>
      <div className='grid gap-4 sm:flex-row grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-5
        '>
         {
       RelatedProduct.map((item, index) => {
        return <ProductsItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
      })
      }

      </div>
    </div>
  )
}

export default RelatedProducts