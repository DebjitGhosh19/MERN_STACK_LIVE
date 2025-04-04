const { createStore } = require("redux")

//sate
const initialState={
  count:0,
}

// action
const incrementAction=()=>{
return {
  type:"INCREMENT"
}
}
const decrementAction=()=>{
  return {
    type:"DECREMENT"
  }
  }
  const resetAction=()=>{
    return {
      type:"RESET"
    }
    }
//reducer
const createReducer=(state=initialState,action)=>{

  switch (action.type) {
    case "INCREMENT":
     return{
      ...state,
      count:state.count+1
     }
     case "DECREMENT":
      return{
       ...state,
       count:state.count-1
      }
      case "RESET":
        return{
         ...state,
         count:0
        }
  
    default:
    return state
  }
}
const store=createStore(createReducer)
store.subscribe(()=>{
  console.log(store.getState());
  
})
store.dispatch(incrementAction())

store.dispatch(incrementAction())

store.dispatch(decrementAction())

store.dispatch(resetAction())