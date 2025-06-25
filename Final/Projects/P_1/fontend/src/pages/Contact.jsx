import React from 'react'
import Title from '../components/Title'
import { assets } from "../assets/assets";
import NewsLetterBox from '../components/NewsLetterBox';
const Contact = () => {
  return (
     <>
    <div className='flex flex-col  md:items-center'>
      <div className='my-14'><Title text1={'CONTACT'} text2={'US'}/></div>
      <div className='flex flex-col md:flex-row gap-8 '>
        <img className='w-full md:w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col gap-6 my-auto text-gray-500'>
          <h2 className='font-bold text-xl text-gray-600'>Our Store</h2>
          <div>
            <p>54709 Willms Station</p>
            <p>Site 350, Washington,USA</p>
          </div>
           <div>
            <p>Tel:(415)555-0132</p>
            <p>Email:admin@forever.com</p>
          </div>
          <h2 className='font-bold text-xl text-gray-600'>Careers at Forever</h2>
          <p>Learn more about our teams and job openings.</p>
          <button className='border inline w-36 py-4 px-2 text-center hover:bg-black hover:text-white transition-all duration-1000 ease-in cursor-pointer'>Explore Jobs</button>
        </div>

      </div>
      
    </div>
    <div className='pt-14'>
        <NewsLetterBox/>
      </div>
     </>
  )
}

export default Contact