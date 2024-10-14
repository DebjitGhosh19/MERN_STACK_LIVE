
const Projects=({projectTitel,children,})=>{
    return <>
  <div className="p-4  shadow-md mb-3 bg-slate-200 rounded-md" >
    <h3 className="font-bold mb-2">{projectTitel}</h3>
    {children}
 
  </div>
  
  </>
}
export default Projects;