const {createStore} =require("redux")
// state
const initialCounterState={
  count :0,
}
//action-object -type,payload
//Increment counter
const Incrementcounter=()=>{
  return{
    type:"INCREMENT",
}
}

const Decrementcounter=()=>{
  return{
    type:"DECREMENT",
}
}

//Reducer
const counterReducer=(state=initialCounterState,action)=>{
switch (action.type) {
  case "INCREMENT":
    return {
      ...state,
      count:state.count+1
    }
    
  case "DECREMENT":
    return {
      ...state,
      count:state.count-1
    }
  default:
    state;
}
}
//Create store
const store=createStore(counterReducer)

store.subscribe(()=>{
  console.log(store.getState());
  
})

//dishpatch action
store.dispatch(Incrementcounter())
store.dispatch(Incrementcounter())
store.dispatch(Decrementcounter())



// 1)state
// 2)action
// 3)reducer
// 4)store getState() , dispatch(), subscribe()
