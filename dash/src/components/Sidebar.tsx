import React from 'react'
import { Link } from 'react-router-dom'
function Sidebar() {
  return (
   <>
    <div className='h-screen '>
        <div className='bg-black h-screen text-white flex flex-col fixed max-md:hidden'>
            <div className='text-center py-10 z-2'>
                Dashboard
            </div>
            <div className='justify-center px-10 py-10 h-96'>
               <div className='my-2'>
                <a href=".">Dashboard</a>
               </div>
               <div className='my-2'>
                <a href=".">Admins</a>
               </div>
               <div className='my-3'>
                <a href=".">Package</a>
               </div>
               <div className='my-2'>
                <Link to='/AddActivities'>Add Package</Link>
               </div>
               <div className='my-2'>
                <a href=".">Bookings</a>
               </div>
               <div className='my-2'>
                <a href=".">Logout</a>
               </div>
            </div>
        </div>
        
    </div>
   </>
  )
}

export default Sidebar