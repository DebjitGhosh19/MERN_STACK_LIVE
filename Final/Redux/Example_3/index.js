import {  createStore } from 'redux';

const initialState={
  user:[],
  count:0
}

const addUser=(value)=>{
  return {
    type:"add",
    payload:value
  }
}
const createReducer=(state=initialState,action)=>{
switch (action.type) {
  case "add":
    return{
      user:[...state.user,action.payload],
      count:state.count+1
    }

  default:
    return state;
}
}
const store=createStore(createReducer);
store.subscribe(()=>{
  console.log(store.getState());
  
})
store.dispatch(addUser("Ram"))
store.dispatch(addUser("Ass"))