import React from 'react'

const ToDoItems = () => {
  let toDoName='Go to Collage';
  let toDoDate='4/10/2024';
  return (
    <div class="container text-center ">
   
    <div class="row  ">
   
      <div class="col CommonWidh">
      {toDoName}
      </div>
      <div class="col CommonWidh">
        {toDoDate}
      </div>
      <div class="col CommonWidh">
      <button type="button" class="btn btn-danger buttns ">Delete</button> 
      </div>
    </div>
  </div>
  )
}

export default ToDoItems