import React from "react";
import Items from "./Items";

const FoodItems = ({foods}) => {
  
  return (
    <>
      
          <ul className="list-group">
        {foods.map((item) => (
          <Items key={item} item={item} handelar={()=>console.log(`${item} brought`)
          }/>
        ))}
      </ul>

    </>
  );
};

export default FoodItems;
