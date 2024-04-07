import React from 'react'
import Sidebar from '../components/Sidebar'
import TopBar from '../components/TopBar'

function AddActivities() {
  return (
    <>
    <div className='flex'>
    <Sidebar/>
   
    <div className='w-screen h-screen'>
    <TopBar/>
      <div className='flex h-full flex-col justify-center items-center bg-slate-300 '>
        form and shit
        <div className=''>
          <form action="" className=''>
           <div className='flex flex-col justify-center'>
              <div>
                <label htmlFor="">Username</label>
                <input type="text" name="" id="" />
              </div>
              <div>
              <label htmlFor="">Email</label>
                <input type="text" name="" id="" />
              </div>
              <div>
              <label htmlFor="">Password</label>
                <input type="text" name="" id="" />
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

export default AddActivities