import React from 'react'
import Items from './Items';

const FoodItems = ({foodItem}) => {
  return (
    <>
    <ul className="list-group">
      {
        foodItem.map(item=>
        <Items key={item}  FoodItem={item}></Items>)
      }
      </ul>
    </>
  )
}

export default FoodItems;