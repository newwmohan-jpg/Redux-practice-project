import React, { cloneElement } from 'react'

import { Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Savedcard from './pages/Savedcard'
import { Routes } from 'react-router-dom'
const App = () => {
  return (
    <div className='min-h-screen text-white bg-gray-950'>
<Routes>
  <Route path='/' element={<HomePage/>} />
  <Route path='/collection' element={<Savedcard/>}/>
</Routes>
 
    </div>
  )
}

export default App
