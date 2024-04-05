import React from 'react'

function TopBar() {
  return (
    <>
        <div className=''>
            <div className='bg-black fixed inset-0 text-white flex justify-between p-2 shadow-sm shadow-black w-screen h-9 z-50'>
               <div>Brand</div>
               <div>Menu</div>
            </div>
        </div>
    </>
  )
}

export default TopBar;