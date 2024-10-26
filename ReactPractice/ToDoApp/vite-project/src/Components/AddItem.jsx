import React from "react";
import css from './AddItem.module.css'
import Style from './Button.module.css'
const AddItem = () => {
  return (
    <div className="container ">
      <div className="row dg-row">
        <div className="col-6">
          <input className={css.Appinput} type="text" name="" id="" placeholder="Enter Your Task" />
        </div>
        <div className="col-4">
          <input className={`${css.Appinput}`} type="date" name="" id="" />
        </div>
        <div className="col-2">
          <button className={` " btn btn-success "  ${Style.AllButton}`}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
