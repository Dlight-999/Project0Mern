import React from 'react'
import paragliding from '../assets/images/paragliding.jpg'
function Services() {
  return (
    <div className='p-3 bg-black text-white'>
       <h1 className='text-center text-xl lg:text-2xl font-bold'>Our Services</h1>
        <div className="grid grid-cols-4 gap-6 mx-2 mt-2">
            <div className='flex flex-col rounded-md bg-white text-black m-2 p-2'>
                <div className='h-40 overflow-hidden rounded-t-md'>
                    <img src={paragliding} alt="" className=' object- w-full h-full'/>
                </div>
                <div className='p-2'>
                    <h2 className='text-xl lg:text-2xl font-bold'>Title</h2>
                    <p className='text-justify text-md lg:text-xl tracking-tighter'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptatibus exercitationem animi. Animi ducimus pariatur nesciunt hic, tempora sit consequatur a et sint! Quod beatae, odit culpa ducimus quasi commodi.
                    </p>
                </div>
                <button className='bg-sky-800 shadow-lg shadow-black p-2 px-3 rounded-md text-xl text-white font-semibold'>
                        Book Now
                 </button>
            </div>
            <div className='flex flex-col rounded-md bg-white text-black m-2 p-2'>
                <div className='h-40 overflow-hidden rounded-t-md'>
                    <img src={paragliding} alt="" className=' object- w-full h-full'/>
                </div>
                <div className='p-2'>
                    <h2 className='text-xl lg:text-2xl font-bold'>Title</h2>
                    <p className='text-justify text-md lg:text-xl tracking-tighter'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptatibus exercitationem animi. Animi ducimus pariatur nesciunt hic, tempora sit consequatur a et sint! Quod beatae, odit culpa ducimus quasi commodi.
                    </p>
                </div>
                <button className='bg-sky-800 shadow-lg shadow-black p-2 px-3 rounded-md text-xl text-white font-semibold'>
                        Book Now
                 </button>
            </div>
            <div className='flex flex-col rounded-md bg-white text-black m-2 p-2'>
                <div className='h-40 overflow-hidden rounded-t-md'>
                    <img src={paragliding} alt="" className=' object- w-full h-full'/>
                </div>
                <div className='p-2'>
                    <h2 className='text-xl lg:text-2xl font-bold'>Title</h2>
                    <p className='text-justify text-md lg:text-xl tracking-tighter'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptatibus exercitationem animi. Animi ducimus pariatur nesciunt hic, tempora sit consequatur a et sint! Quod beatae, odit culpa ducimus quasi commodi.
                    </p>
                </div>
                <button className='bg-sky-800 shadow-lg shadow-black p-2 px-3 rounded-md text-xl text-white font-semibold'>
                        Book Now
                 </button>
            </div>
            <div className='flex flex-col rounded-md bg-white text-black m-2 p-2'>
                <div className='h-40 overflow-hidden rounded-t-md'>
                    <img src={paragliding} alt="" className=' object- w-full h-full'/>
                </div>
                <div className='p-2'>
                    <h2 className='text-xl lg:text-2xl font-bold'>Title</h2>
                    <p className='text-justify text-md lg:text-xl tracking-tighter'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptatibus exercitationem animi. Animi ducimus pariatur nesciunt hic, tempora sit consequatur a et sint! Quod beatae, odit culpa ducimus quasi commodi.
                    </p>
                </div>
                <button className='bg-sky-800 shadow-lg shadow-black p-2 px-3 rounded-md text-xl text-white font-semibold'>
                        Book Now
                 </button>
            </div>
            
        </div>
    </div>
  )
}

export default Services