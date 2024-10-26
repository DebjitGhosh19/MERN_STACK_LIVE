import React from 'react'
import css from './Components.module.css'
const Components = ({children}) => {
  return (
    <div className={css.contener}>{children}</div>
  )
}

export default Components