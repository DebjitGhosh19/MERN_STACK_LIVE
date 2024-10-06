import Button from "./Button"; 
const Item=({id,Todotext,Tododate})=>{
  return  <div class="container text-center">
  <div class="row">
   <div class="col-5 text-truncate">
   {Todotext}
   </div>
   <div class="col-3">
    {Tododate}
   </div>
   <div class="col-2">
   <Button  btnText='Delete'btnType='danger'/>
   </div>
 </div>
 </div>
}
export default Item;