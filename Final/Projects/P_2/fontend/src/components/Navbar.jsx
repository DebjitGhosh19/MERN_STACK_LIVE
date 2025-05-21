import { Link, NavLink } from 'react-router-dom'
import {assets} from '../assets/assets'
const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-5'>
      <Link to='/'>
      <img className='w-36' src={assets.logo} alt="" />
      </Link>
      <ul className='hidden sm:flex gap-6 text-gray-700 font-normal '>
        <NavLink to="/" className=' flex items-center gap-1 flex-col '>
        <p>HOME</p>
        <hr className='hidden w-1/2 ' />
        </NavLink>
        <NavLink to="/about" className=' flex items-center gap-1 flex-col '>
        <p>ABOUT</p>
        <hr className='hidden w-1/2 ' />
        </NavLink>
        <NavLink to="/collection" className=' flex items-center gap-1 flex-col '>
        <p>COLLECTION</p>
        <hr className='hidden w-1/2 ' />
        </NavLink>
        <NavLink to="/contact" className=' flex items-center gap-1 flex-col '>
        <p>CONTACT</p>
        <hr className='hidden w-1/2 ' />
        </NavLink>

      </ul>
    </div>
  )
}

export default Navbar