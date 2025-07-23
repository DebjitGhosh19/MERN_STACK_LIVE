import React, { useState } from "react";
import { assets } from "../assets/assets";
import axios from 'axios'
import { backendUrl } from "../App";
import { toast } from "react-toastify";
const Add = ({token}) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [sizes, setSizes] = useState([]);
  const [price, setPrice] = useState("");
  const [bestseller, setBestseller] = useState(false);

  const onSubmitHandelar = async (e) => {
    e.preventDefault();
   try {
     const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("subCategory", subCategory);
    formData.append("price", price);
    formData.append("sizes", JSON.stringify(sizes));
    formData.append("bestseller",bestseller)

    image1&&formData.append("image1",image1)
    image2&&formData.append("image2",image2)
    image3&&formData.append("image3",image3)
    image4&&formData.append("image4",image4)

    const response=await axios.post(backendUrl+'/api/product/add',formData,{headers:{token}})
    if (response.data.success) {
      toast.success(response.data.message);
      setName('');
      setDescription('');
      setPrice('')
      setBestseller(false);
      setImage1(false)
      setImage2(false)
      setImage3(false)
      setImage4(false)
      setSizes([]);
    } else {
      toast.error(response.data.message)
    }
    
   } catch (error) {
    console.log(error);
    toast.error(error.message)
   }
  };

  return (
    <form onSubmit={onSubmitHandelar} className="flex flex-col gap-3">
      <h1>Upload Image</h1>
      <div className="py-2 flex gap-2 ">
        <label htmlFor="image1">
          <img
            className="w-20 cursor-pointer "
            src={!image1 ? assets.upload_area : URL.createObjectURL(image1)}
            alt=""
          />
          <input
            type="file"
            id="image1"
            className="hidden"
            onChange={(e) => setImage1(e.target.files[0])}
          />
        </label>
        <label htmlFor="image2">
          <img
            className="w-20 cursor-pointer"
            src={!image2 ? assets.upload_area : URL.createObjectURL(image2)}
            alt=""
          />
          <input
            type="file"
            id="image2"
            className="hidden"
            onChange={(e) => {
              setImage2(e.target.files[0]);
            }}
          />
        </label>
        <label htmlFor="image3">
          <img
            className="w-20 cursor-pointer"
            src={!image3 ? assets.upload_area : URL.createObjectURL(image3)}
            alt=""
          />
          <input
            type="file"
            id="image3"
            className="hidden"
            onChange={(e) => setImage3(e.target.files[0])}
          />
        </label>
        <label htmlFor="image4">
          <img
            className="w-20 cursor-pointer"
            src={!image4 ? assets.upload_area : URL.createObjectURL(image4)}
            alt=""
          />
          <input
            type="file"
            id="image4"
            className="hidden"
            onClick={(e) => setImage4(e.target.files[0])}
          />
        </label>
      </div>
      <div className="flex flex-col">
        <p>Product name</p>
        <input
          type="text"
          placeholder="Type here"
          className=" max-w-[500px] p-2 border border-gray-400 my-2"
          required
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>
      <div className="flex flex-col">
        <p>Product description</p>
        <textarea
          placeholder="Write content here"
          className=" max-w-[500px] p-2 border border-gray-400 my-2"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
      </div>
      <div className="flex flex-col  gap-8 sm:flex-row">
        <div className="flex flex-col">
          <p className="pb-2">Product category</p>
          <select
            className="border border-gray-400 px-6 py-2 rounded-sm "
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>
        <div className="flex flex-col">
          <p className="pb-2">Sub category</p>
          <select
            className="border border-gray-400 px-6 py-2 rounded-sm "
            onChange={(e) => setSubCategory(e.target.value)}
            value={subCategory}
          >
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>
        <div className="flex flex-col">
          <p className="pb-2">Product Price</p>
          <input
            type="number"
            placeholder="25"
           
            className="border border-gray-400 px-6 py-2 rounded-sm "
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </div>
      </div>
      <div>
        <p>Product Sizes</p>
        <div className="flex gap-2 mt-2">
          <p
            className={`${
              sizes.includes("S") ? "bg-pink-100" : "bg-gray-200"
            }  px-3 py-1 cursor-pointer`}
            onClick={(e) =>
              setSizes((prev) =>
                prev.includes("S")
                  ? prev.filter((item) => item !== "S")
                  : [...prev, "S"]
              )
            }
          >
            S
          </p>
          <p
            className={`${
              sizes.includes("M") ? "bg-pink-100" : "bg-gray-200"
            }  px-3 py-1 cursor-pointer`}
            onClick={(e) =>
              setSizes((prev) =>
                prev.includes("M")
                  ? prev.filter((item) => item !== "M")
                  : [...prev, "M"]
              )
            }
          >
            M
          </p>
          <p
            className={`${
              sizes.includes("L") ? "bg-pink-100" : "bg-gray-200"
            }  px-3 py-1 cursor-pointer`}
            onClick={(e) =>
              setSizes((prev) =>
                prev.includes("L")
                  ? prev.filter((item) => item !== "L")
                  : [...prev, "L"]
              )
            }
          >
            L
          </p>
          <p
            className={`${
              sizes.includes("XL") ? "bg-pink-100" : "bg-gray-200"
            }  px-3 py-1 cursor-pointer`}
            onClick={(e) =>
              setSizes((prev) =>
                prev.includes("XL")
                  ? prev.filter((item) => item !== "XL")
                  : [...prev, "XL"]
              )
            }
          >
            XL
          </p>
          <p
            className={`${
              sizes.includes("XXL") ? "bg-pink-100" : "bg-gray-200"
            }  px-3 py-1 cursor-pointer`}
            onClick={(e) =>
              setSizes((prev) =>
                prev.includes("XXL")
                  ? prev.filter((item) => item !== "XXL")
                  : [...prev, "XXL"]
              )
            }
          >
            XXL
          </p>
        </div>
      </div>
      <div className="flex gap-2">
        <input
          className="cursor-pointer"
          type="checkbox"
          id="bestseller"
          onChange={() => setBestseller((prev) => !prev)}
          checked={bestseller}
        />
        <label htmlFor="bestseller" className="cursor-pointer">
          Add to bestseller
        </label>
      </div>
      <button
        type="submit"
        className="bg-black text-white w-28  py-3 mt-4 text-center cursor-pointer"
      >
        ADD
      </button>
    </form>
  );
};

export default Add;
