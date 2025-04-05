const {createStore,combineReducers}=require("redux")
//state
const initialState={
  products:['sugar','pen'],
  numberOfProducts:2
}
const initialState2={
  products2:['sugar2','pen2'],
  numberOfProducts2:2
}
//first action
const getProduct=()=>{
  return {
    type:"get"
  }
}
const getProduct2=()=>{
  return {
    type:"get2"
  }
}
//second action
const addProduct=(value)=>{
  return {
    type:"add",
    payload:value
  }
}
const addProduct2=(value)=>{
  return {
    type:"add2",
    payload:value
  }
}
//reducer
const createReducer=(state=initialState,action)=>{
switch (action.type) {
  case "get":
    return state
    case "add":
      return {
        products:[...state.products,action.payload],
        numberOfProducts:state.numberOfProducts+1
      }

  default:
   return state
}
}

const createReducer2=(state=initialState2,action)=>{
  switch (action.type) {
    case "get2":
      return state
      case "add2":
        return {
          products:[...state.products2,action.payload],
          numberOfProducts:state.numberOfProducts2+1
        }
  
    default:
     return state
  }
  }
//combine reducer
const rootReducer=combineReducers({
  product_1:createReducer,
  product_2:createReducer2
})
const store=createStore(rootReducer);
store.subscribe(()=>{
  console.log(store.getState());
})
store.dispatch(getProduct());
store.dispatch(getProduct2())
store.dispatch(addProduct("Sunlight"));
store.dispatch(addProduct2("While"))