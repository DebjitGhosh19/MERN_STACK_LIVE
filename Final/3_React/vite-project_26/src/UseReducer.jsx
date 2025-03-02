import React,{useReducer} from 'react'

const UseReducer = () => {
  const initialState={
    count:0,
    random:25,
    demo:30
  }
  const reducer=(state,action)=>{
    console.log(state);
    
    // if (action.type==="increment") {
    //   return state+1;
    // }
    // else if(action.type==="decrement"){
    //   return state-1;
    // }
    // else if(action.type==="reset"){
    //   return state=0;
    // }
    switch (action.type) {
      case "increment":
        return {...state,count:state.count+1}      
        case "decrement":
          return {...state,count:state.count-1};      
          case "reset":
            return {...state,count:0};      
          
      default:
      return state
    }
  }
  const [state, dispatch] = useReducer(reducer,initialState)
  return (
    <div className="counter">
      <h1>{state.count}</h1>
      <button className="increment" onClick={()=>{dispatch({type:"increment"})}}>+</button>
      <button className="decrement" onClick={()=>{dispatch({type:"decrement"})}}>-</button>
      <button className="reset" onClick={()=>{dispatch({type:"reset"})}}>Reset</button>
    </div>
  )
}

export default UseReducer