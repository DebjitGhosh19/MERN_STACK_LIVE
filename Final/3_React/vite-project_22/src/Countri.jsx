import React from 'react'

const Countri = ({countri}) => {
  return (
    <article>
      <img src={countri.flags.png} alt="" />
      <h3></h3>
    </article>
  )
}

export default Countri