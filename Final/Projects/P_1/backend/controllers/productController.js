import { v2 as cloudinary } from 'cloudinary';
import productModle from '../models/productModel.js'
//Function for Add product
export const addProduct=async (req,res) => {
  try {
    const {name,description,price,category,subCategory,sizes,bestseller}=req.body;
    const image1= req.files.image1&&req.files.image1[0];
    const image2= req.files.image2&&req.files.image2[0];
    const image3= req.files.image3&&req.files.image3[0];
    const image4= req.files.image4&&req.files.image4[0];
    const images=[image1,image2,image3,image4].filter((item)=>item!==undefined);

   let imageUrl=await Promise.all(
      images.map(async(item)=>{
        let result=await cloudinary.uploader.upload(
         item.path,{resource_type:'image'}
         
        )
        return result.secure_url
      }
      )
    )
const product=new productModle({
name,
description,
price:Number(price),
category,
subCategory,
sizes:JSON.parse(sizes),
bestseller:bestseller=="true"?true:false,
date:Date.now(),
image:imageUrl
})

await product.save();

    console.log(name,description,price,category,subCategory,sizes,bestseller);
    console.log(imageUrl);
    res.json({
      success:true,message:"Product added"
    })

  } catch (error) {
    console.log(error)
    res.json({     
      success:false,message:error.message
    })
  }
}
//Function for List Product
export const listProduct=async (req,res) => {
  try {
    const products=await productModle.find({});
  res.json({
    success:true,
    products
  })
  } catch (error) {
     console.log(error)
    res.json({     
      success:false,message:error.message
    })
  }

}
//Function for Remove Product
export const removeProduct=async (req,res) => {
  try {
    await productModle.findByIdAndDelete(req.body.id)
    res.json({
      success:true,
      message:"Remove product"
    })
  } catch (error) {
     console.log(error)
    res.json({     
      success:false,message:error.message
    })
  }
}
//Function for Single Product info
export const singleProduct=async (req,res) => {
   try {
    const {productId}=req.body
    const product=await productModle.findById(productId);
  res.json({
    success:true,
    product
  })
  } catch (error) {
     console.log(error)
    res.json({     
      success:false,message:error.message
    })
  }
}