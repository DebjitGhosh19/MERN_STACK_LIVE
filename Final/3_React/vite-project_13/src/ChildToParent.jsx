import React from 'react'

const ChildToParent = ({childData}) => {
  const data='I am from child';
  childData(data)
  
  return (
    <div>ChildToParent</div>
  )
}

export default ChildToParent