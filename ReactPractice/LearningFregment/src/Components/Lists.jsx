import React from "react";
import Items from "./Items";

const Lists = ({foods}) => {
  
  return (
    <>
      
          <ul className="list-group">
        {foods.map((item) => (
          <Items key={item} item={item}/>
        ))}
      </ul>

    </>
  );
};

export default Lists;
