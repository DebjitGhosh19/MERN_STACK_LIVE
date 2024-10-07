import Button from "./Button";

const AddItems=()=>{
  const addhandlr=()=>{
    console.log("ADD");
    
  }
  return    <div className="container ">
  <div className="row custome-row">
   <div className="col-5">
     <input type="text"className="form-control"  placeholder="Enter Todo Here" />
   </div>
   <div className="col-3">
     <input type="date" className="form-control"  />
   </div>
   <div className="col-2">
    
     <Button btnText='Add' btnType='success' handlar={addhandlr}/>
   </div>
 </div>
 </div>
}
export default AddItems;