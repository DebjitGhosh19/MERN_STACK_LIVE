import React from 'react'

const Items = ({FoodItem}) => {
  return (
   <>
   <li className="list-group-item disabled" >{FoodItem}</li>
   </>
  )
}

export default Items