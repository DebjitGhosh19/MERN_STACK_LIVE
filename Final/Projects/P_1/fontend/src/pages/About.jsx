import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from '../components/NewsLetterBox'
const About = () => {
  return (
    <>
   
    <div className="border-t border-gray-300 flex flex-col gap-4">
      <div className="mt-8 mb-10">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="flex flex-col md:flex-row gap-14">
        <div className="md:w-[450px] my-auto">
          <img className=" w-full" src={assets.about_img} alt="" />
        </div>
        <div className="flex flex-col gap-8 text-gray-800 md:w-1/2 my-auto">
          <p>
            Forever was born out of a passion for innovation and a desire to
            revolutionize the way people shop online. Our journey began with a
            simple idea: to provide a platform where customers can easily
            discover, explore, and purchase a wide range of products from the
            comfort of their homes.
          </p>
          <p>
            Since our inception, we've worked tirelessly to curate a diverse
            selection of high-quality products that cater to every taste and
            preference. From fashion and beauty to electronics and home
            essentials, we offer an extensive collection sourced from trusted
            brands and suppliers.
          </p>
          <h4 className="font-bold text-black">Our Mission</h4>
          <p>
            Our mission at Forever is to empower customers with choice,
            convenience, and confidence. We're dedicated to providing a seamless
            shopping experience that exceeds expectations, from browsing and
            ordering to delivery and beyond.
          </p>
        </div>
      </div>
      
    </div>
    <div className="mt-14 flex flex-col  gap-8">
        <div className="flex flex-start ">
          <Title text1={"WHY"} text2={"CHOOSE US"} />
        </div>
        <div className="border flex flex-col md:flex-row border-gray-200">
          <div className="border border-gray-200 py-10 md:py-20  px-10 ">
            <h4 className="font-bold mb-4">Quality Assurance:</h4>
            <p className="text-sm text-gray-600 text-start w-[80%]">We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
          </div>
          <div className="border border-gray-200 py-10 md:py-20  px-10 ">
            <h4 className="font-bold mb-4">Convenience:</h4>
            <p className="text-sm text-gray-600 text-start w-[80%]">With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
          </div>
          <div className="border border-gray-200 py-10 md:py-20  px-10 ">
            <h4 className="font-bold mb-4">Exceptional Customer Service:</h4>
            <p className="text-sm text-gray-600 text-start w-[80%]">Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
          </div>
        </div>
        
      </div>
     <div className="mt-20">
       <NewsLetterBox/>
     </div>
    </>
  );
};

export default About;
