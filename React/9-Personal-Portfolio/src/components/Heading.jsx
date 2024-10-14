
import logo from '../assets/Profile.jpg';
const Heading=()=>{
return <header>
  <div className="bg-blue-600 text-white rounded-md p-4 flex justify-between items-center ">
    <div>
    <h1 className="font-bold text-3xl">Debjit Ghosh</h1>
    <p>Full Stack Developer</p>
    </div>
   
    <img src={logo} alt=""  className='w-20 rounded-full'/>
  </div>

</header>
}
export default Heading;