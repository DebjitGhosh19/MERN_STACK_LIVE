import React from 'react'
import { assets } from '../assets/assets'

const Add = () => {
  return (
    <div >
      <h1>Upload Image</h1>
      <div className='py-2'>
        <img className='w-25' src={assets.upload_area} alt="" 
        />
        
      </div>
    </div>
  )
}

export default Add