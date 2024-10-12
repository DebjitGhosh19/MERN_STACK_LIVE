import css from './components.module.css'
const Components=(proms)=>{
  return <div className={css.contener}>
    {proms.children}
  </div>
}
export default Components;