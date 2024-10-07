import Button from "./Button"; 
const Item=({id,Todotext,Tododate})=>{

  const DeleteHandler=()=>{
    console.log("Delete")
  }
 
  return  <div className="container ">
  <div className="row custome-row">
   <div className="col-5 text-truncate">
   {Todotext}
   </div>
   <div className="col-3">
    {Tododate}
   </div>
   <div className="col-2">
   <Button  btnText={'Delete'} btnType={'danger'} handlar={DeleteHandler}/>
 
   </div>
 </div>
 </div>
}
export default Item;