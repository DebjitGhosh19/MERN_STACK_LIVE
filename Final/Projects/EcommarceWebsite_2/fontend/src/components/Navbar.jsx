import { assets } from "../assets/frontend_assets/assets";
import {NavLink} from 'react-router-dom'

const Navbar = () => {

  return (
   <div className="flex justify-between items-center py-4">
    <img className="w-36" src={assets.logo} alt="" />
    <ul className="hidden sm:flex   gap-5">
      <div className="flex flex-col items-center gap-1">
      <NavLink to='/'>HOME</NavLink>
      <hr className="hidden w-2/4 border-none h-[1.5px] bg-gray-700" />
      </div>
      <div className="flex flex-col items-center gap-1">
      <NavLink to='/collection'>COLLECTION</NavLink>
      <hr className="hidden w-2/4 border-none h-[1.5px] bg-gray-700" />
      </div>
      <div className="flex flex-col items-center gap-1">
      <NavLink to='/about'>ABOUT</NavLink>
      <hr className="hidden w-2/4 border-none h-[1.5px] bg-gray-700" />
      </div>
      <div className="flex flex-col items-center gap-1">
      <NavLink to='/contact'>CONTACT</NavLink>
      <hr className="hidden w-2/4 border-none h-[1.5px] bg-gray-700" />
      </div>
    
  
      
    </ul>
    <div className="flex items-center gap-4">
      <img src={assets.search_icon} className="w-5" alt="" />
      <div className="group relative">
        <img src={assets.profile_icon} className="w-5" alt="" />
        <div className="group-hover:block hidden w-36 absolute bottom-[-5px] right-[-5px] ">
          <p>My Profile</p>
          <p>Logout</p>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Navbar;
