import React from "react";
import Style from './Button.module.css'
const TodoItem = ({ TodoDate, TodoItem }) => {
  return (
    <>
      <div className="container ">
        <div className="row dg-row">
          <div className="col-6">{TodoItem}</div>
          <div className="col-4">{TodoDate}</div>
          <div className="col-2">
            <button className={` " btn btn-danger "  ${Style.AllButton}`}>Delete</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoItem;
