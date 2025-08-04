import React from 'react'

const Title = ({title1,title2}) => {
  console.log(title1,title2);
  
  return (
    <div >
      <p>{title1}<samp>{title2}</samp></p>
    </div>
  )
}

export default Title