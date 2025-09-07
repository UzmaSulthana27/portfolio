import { Home } from './pages/Home'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NotFound } from './pages/NotFound'

const App = () => {
  return (
    <div>
        <>
        <BrowserRouter>
        <Routes>
            <Route index element={<Home/>} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
        </BrowserRouter>
        </>
     </div>
  )
}

export default App
