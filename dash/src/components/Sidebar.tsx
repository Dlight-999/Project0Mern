import React from 'react'

function Sidebar() {
  return (
   <>
    <div className='h-screen '>
        <div className='bg-black h-screen w-1/4 text-white flex flex-col fixed max-md:hidden'>
            <div className='text-center py-10 '>
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
                <a href=".">Add Package</a>
               </div>
               <div className='my-2'>
                <a href=".">Bookings</a>
               </div>
               <div className='my-2'>
                <a href=".">Logout</a>
               </div>
            </div>
        </div>
        <div className=''>
            <div className='bg-black fixed inset-0 text-white flex justify-between p-2 shadow-sm shadow-black w-screen h-9 z-50'>
               <div>Brand</div>
               <div>Menu</div>
            </div>
        </div>
    </div>
   </>
  )
}

export default Sidebar