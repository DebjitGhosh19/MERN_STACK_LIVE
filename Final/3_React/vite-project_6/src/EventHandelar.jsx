import React, { Component } from 'react'

export default class EventHandelar extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       value:''
    }    
  }
  Handel=(e)=>{
    
    this.setState({
      value:e.target.value,
    })
    
    
  }

  render() {
    const {value}=this.state;
    return (

      <div>
        <input type="text"  onChange={this.Handel}/>
        <p>{value}</p>
      </div>
    )
  }
}
