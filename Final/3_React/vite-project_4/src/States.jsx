import React, { Component } from 'react'
import './Style.css'
export default class States extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count:0
    }
  }
  Add=()=>{
    this.setState({
      count:this.state.count+1
    })
  }
  Sub=()=>{
    this.setState({
      count:this.state.count-1
    })
  }
  render() {
    const {count}=this.state;
    return (
      <div>
        <h1>Count:{count}</h1>
        <button onClick={this.Add} disabled={count===10?true:false}>+</button>
        <button onClick={this.Sub} disabled={count===0?true:false}>-</button>
      </div>
    )
  }
}
