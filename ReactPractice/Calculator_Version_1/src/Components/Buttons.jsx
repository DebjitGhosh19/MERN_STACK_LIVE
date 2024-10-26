import React from 'react'
import css from './Buttons.module.css'
const Buttons = () => {
  const buttons=["C","1","2","+","3","4","-","5","6","*","7","8","/","=","9","0","."]
  return (<>
  <div className={css.buttonContener}>
    {
      buttons.map(item=><button className={css.button}>{item}</button>)
    }
    </div>
    </>
  )
}

export default Buttons