import React, { Component, createRef } from 'react'

export default class Ref extends Component {
  constructor(props) {
    super(props)
  this.userName=createRef()
    this.state = {

    }
  }
   handelSubmit=(event)=>{
    event.preventDefault();
    console.log(this.userName.current.value);
    
  }
  render() {
    return (
     <form action="" onSubmit={this.handelSubmit}>
      <div>
      <label htmlFor="userName">Name:</label>
      <input type="text" name="userName" id="userName" ref={this.userName}/>
      </div>
      <div>
      <label htmlFor="password">Password:</label>
      <input type="password" name="password" id="password" />
      </div>
      <button type="submit">Register</button>
     </form>
    )
  }
}
