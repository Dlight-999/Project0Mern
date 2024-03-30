import React from 'react'
import background from '../assets/images/dark_background.jpg'
function Hero() {
  return (
    <div className='relative overflow-hidden'>
        <img src={background} alt="" className='w-full object-cover'/>
        <div className='absolute inset-0 flex justify-center items-center text-white bg-black/65 shadow-black shadow-lg rounded-md text-center'>
            <div className='mx-auto'>
                <h1 className='text-2xl md:text-5xl lg:text-6xl font-bold'>Adventure Pokhara</h1>
                <h2 className='mt-4 text-sm md:text-xl flex'>Embark on an Adventure of a Lifetime!</h2>
                <p className='mt-2 flex text-sm md:text-xl'>Discover Exciting Destinations and Create Lasting Memories</p>
                <button className=" bg-sky-800 shadow-lg shadow-black p-2 px-5 mt-4 rounded-md text-xl font-semibold">
                    Click
                </button>
            </div>
        </div>
    </div>
  )
}

export default Hero