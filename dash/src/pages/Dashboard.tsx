import React from 'react'
import Sidebar from '../components/Sidebar'
import TopBar from '../components/TopBar'

function Dashboard() {
  return (
    <>
   <div className='flex'>
   <Sidebar/>
    <TopBar/>
   </div>
    </>
  )
}

export default Dashboard