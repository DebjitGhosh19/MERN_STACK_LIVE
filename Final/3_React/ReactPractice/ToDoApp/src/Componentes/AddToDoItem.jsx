import React from 'react'

export const AddToDoItem = () => {
  return (
      <div class="container text-center">
  <div class="row ">
    <div class="col ">
    <input type="text"  placeholder='Enter Todo here' class='CommonWidh'/>
    </div>
    <div class="col ">
    <input type="date" name="date" id="date" class='CommonWidh'/>
    </div>
    <div class="col CommonWidh">
    <button type="button" class="btn buttns btn-success">Add</button> 
    </div>
  </div>
</div>
  )
}
