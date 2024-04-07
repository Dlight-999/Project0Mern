import React from 'react'

function TopBar() {
  return (
    <>
        <div className='w-screen'>
            <div className='bg-black  fixed w-screen text-white flex justify-between p-2 shadow-sm shadow-black h-9'>
               <div>Brand</div>
               <div>Menu</div>
            </div>
        </div>
    </>
  )
}

export default TopBar;