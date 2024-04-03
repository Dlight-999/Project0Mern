import React from 'react'
import loginBg from '../assets/images/loginBg.jpg';
import image from '../assets/images/unnamed.jpg';
function Login() {
  return (
    <>
    <div className='h-screen w-screen'>
        <img src={loginBg} alt="" className=' object-content h-screen w-screen'/>
        <div className='absolute inset-0 mx-auto flex justify-center items-center text-white w-screen  '>
            <div className='flex h-auto'>
                <div className=' bg-gray-950 flex w-full justify-center rounded-l-md shadow-lg shadow-indigo-950'>
                <div className=' flex flex-col justify-center my-1 p-5'>
                    Login form
                    <form action="">
                   
                    <div className="input my-2 flex flex-col">
                        <label htmlFor="">Email</label>
                        <input type="text" name="" id="" className='rounded-lg h-10 w-80 text-black p-2 my-2'/>
                    </div>
                    <div className="input my-2 flex flex-col">
                        <label htmlFor="">Password</label>
                        <input type="text" name="" id="" className='rounded-lg h-10 w-80 text-black p-2 my-2'/>
                    </div>
                    <div className="input my-2 flex flex-col">
                        <button className=' bg-indigo-600 rounded-lg p-2 px-5 my-2'>Sign in</button>
                    </div>
                    </form>
                    
                </div>
                </div>
                <div className='w-full flex max-md:hidden'>

                        <img src={image} alt="" className='object-fill rounded-r-md shadow-lg shadow-indigo-950 brightness-75'/>
                        
      
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Login