import mongoose  from "mongoose";

const todoSchema=new mongoose.Schema({
  text:{
    type:String,
    require:true,
  },
  completed:{
    type:Boolean,
    require:true
  }
})
const Todo=mongoose.model("Todo",todoSchema);
export default Todo;