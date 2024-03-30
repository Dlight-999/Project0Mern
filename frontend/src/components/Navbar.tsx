import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { RiAccountCircleLine } from "react-icons/ri";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
   <nav className='nav w-screen bg-black text-white p-3 text-md top-0 fixed z-50'>
    <div>
    <div className='flex justify-between items-center'>
      <div> 
        <div>Adventure Pokhara</div>
      </div>
      <div className='hidden md:flex items-center'>
        <a href="." className='px-2 py-2'>Home</a>
        <a href="." className='px-2 py-2'>Our Services</a>
        <a href="." className='px-2 py-2'>About us</a>
        <a href="." className='px-2 py-2'>Contact</a>
        <a href='.' className='px-2 text-3xl'> <RiAccountCircleLine /> </a>
      </div>
      <div className=' md:hidden'>
        <button onClick={toggleMenu}>
          {showMenu? <IoClose />: <FaBars /> }
        </button>
      </div>
      </div>
      
    </div>
    
    <div className={`${showMenu ? 'block mx-auto' : 'hidden'} md:hidden flex  flex-col justify-center items-center`}>
      <div className='text-center'>
        <a href="." className='block px-2 py-2'>Home</a>
        <a href="." className='block px-2 py-2'>Our Services</a>
        <a href="." className='block px-2 py-2'>About us</a>
        <a href="." className='block px-2 py-2'>Contact</a>
        <a href='.' className='flex justify-center items-baseline px-2 py-2'> Account <RiAccountCircleLine /></a>
        </div>
      </div>
   </nav>
  );
}

export default Navbar;
