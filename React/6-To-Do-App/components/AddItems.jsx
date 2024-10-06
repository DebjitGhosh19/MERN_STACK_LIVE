import Button from "./Button";

const AddItems=()=>{
  return    <div class="container text-center">
  <div class="row">
   <div class="col-5">
     <input type="text"class="form-control"  placeholder="Enter Todo Here" />
   </div>
   <div class="col-3">
     <input type="date" class="form-control"  />
   </div>
   <div class="col-2">
    
     <Button btnText='Add' btnType='success'/>
   </div>
 </div>
 </div>
}
export default AddItems;