import React from 'react'
import Sidebar from '../components/Sidebar'
import TopBar from '../components/TopBar'
function AddAdmins() {
    return (
        <>
        <div className='flex'>
        <Sidebar/>
       
        <div className='w-screen h-screen'>
        <TopBar/>
          <div className='flex h-full w-full flex-col justify-center items-center bg-gray-300 '>
            form and shit
            <div className=''>
              <form action="" className=''>
               <div className=''>
                  <div className='flex flex-col my-2'>
                    <label htmlFor="">Username</label>
                    <input type="text" name="" id="" className='w-96 p-2 rounded-md' />
                  </div>
                  <div className='flex flex-col my-2'>
                  <label htmlFor="">Email</label>
                    <input type="text" name="" id="" className='w-96 p-2  rounded-md' />
                  </div>
                  <div className='flex flex-col my-2'>
                  <label htmlFor="">Password</label>
                    <input type="text" name="" id="" className='w-96 p-2  rounded-md'/>
                  </div>
                  <div className='flex flex-col my-2'>
                  <label htmlFor="">Confirm Password</label>
                    <input type="text" name="" id="" className='w-96 p-2  rounded-md'/>
                  </div>
                  <div className='flex flex-col my-2'>
                 <button className=' bg-indigo-800 p-2 my-2 text-white rounded-md'>Add Admin</button>
                  </div>
               </div>
              </form>
            </div>
          </div>
        </div>
        </div>
        </>
      )
}

export default AddAdmins