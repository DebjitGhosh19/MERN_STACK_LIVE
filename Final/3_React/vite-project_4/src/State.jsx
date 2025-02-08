import React, { Component } from 'react'
import './Style.css'
export default class State extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count:0,
    }
  }
  AddItem=()=>{
    this.setState({
      count:this.state.count+1
    })
  }
  SubItem=()=>{
    this.setState({
      count:this.state.count-1
    })
  }
 
  render() {
    const {count}=this.state;
    return (
      <div>
        <h1>Count:{count}</h1>
      <button onClick={this.AddItem}>+</button>
      <button onClick={this.SubItem}>-</button>
      </div>
    )
  }
}
