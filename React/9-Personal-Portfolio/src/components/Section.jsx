const Section=({logo,sectionTital,children})=>{
 return <div className='my-8 mx-4 '>
  <div className='flex items-center mb-2'>
{logo}
  <h2 className='font-bold text-2xl ml-2 '>{sectionTital}</h2>
  </div>
{children}
 </div>
}
export default Section;