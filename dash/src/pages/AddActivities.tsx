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
      <div className='flex h-full w-full flex-col justify-center items-center bg-gray-300 '>
        Add Activities
        <div className=''>
          <form action="" className=''>
           <div className=''>
              <div className='flex flex-col my-2'>
                <label htmlFor="">Package Name</label>
                <input type="text" name="" id="" className='w-96 p-2 rounded-md' />
              </div>
              <div className='flex flex-col my-2'>
              <label htmlFor="">Package Price</label>
                <input type="text" name="" id="" className='w-96 p-2  rounded-md' />
              </div>
              <div className='flex flex-col my-2'>
              <label htmlFor="">Package Description</label>
                <input type="text" name="" id="" className='w-96 p-2  rounded-md'/>
              </div>
              <div className='flex flex-col my-2'>
              <label htmlFor="">Package Image</label>
                <input type="file" accept='image/png, image/jpeg' name="" id="" className='w-96 p-2  rounded-md'/>
              </div>
              <div className='flex flex-col my-2'>
              <label htmlFor="">Package Featured</label>
              <div className='flex justify-evenly'>
                <div><input type="radio" name="featured" value='yes' />Yes</div>
                <div><input type="radio" name="featured" value='no' />No</div>
                </div>
              </div>

              <div className='flex flex-col my-2'>
              <label htmlFor="">Package Active</label>
              <div className='flex justify-evenly'>
                <div><input type="radio" name="active" value='yes' />Yes</div>
                <div><input type="radio" name="active" value='no' />No</div>
                </div>
              </div>
              <div className='flex flex-col my-2'>
             <button className=' bg-indigo-800 p-2 my-2 text-white rounded-md'>Add Package</button>
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