import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AddActivities from './pages/AddActivities';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/addActivities' element={<AddActivities/>}/>

          <Route path='/login' element={<Login/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App