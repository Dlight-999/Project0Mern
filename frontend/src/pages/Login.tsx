import React from 'react'
import loginBg from '../assets/images/loginBg.jpg';
import image from '../assets/images/unnamed.jpg';
function Login() {
  return (
    <>
    <div className='h-screen w-screen'>
        <img src={loginBg} alt="" className=' object-content h-screen w-screen'/>
        <div className='absolute inset-0 mx-auto flex justify-center items-center text-white w-screen'>
            <div className='flex  h-auto'>
                <div className=' bg-gray-950 flex w-full justify-center'>
                <div className=' flex flex-col my-1 p-5'>
                    Login form
                    <form action="">
                    <div className="input m-2 flex flex-col">
                        <label htmlFor="">Username</label>
                        <input type="text" name="" id="" />
                    </div>
                    <div className="input m-2 flex flex-col">
                        <label htmlFor="">Email</label>
                        <input type="text" name="" id="" />
                    </div>
                    <div className="input m-2 flex flex-col">
                        <label htmlFor="">Password</label>
                        <input type="text" name="" id="" />
                    </div>
                    <div className="input m-2 flex flex-col">
                        <label htmlFor="">Confirm Password</label>
                        <input type="text" name="" id="" />
                    </div>
                    <div className="input m-2 flex flex-col">
                        <button>Login</button>
                    </div>
                    </form>
                    
                </div>
                </div>
                <div className='h-auto w-full'>
                    <div className='overflow-hidden '>
                        <img src={image} alt="" className='object-cover'/>
                        
                    </div>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Login