import { Home } from './pages/Home'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NotFound } from './pages/NotFound'
// Import the new Fluid Cursor component
import CursorParticleEffect  from './components/CursorParticleEffect' // Make sure the path is correct

const App = () => {
  return (
    // The main div ensures the app takes up the full screen
    <div className="min-h-screen relative">
      
      {/* 1. RENDER THE FLUID CURSOR COMPONENT HERE */}
      {/* This component will manage the WebGL canvas over the entire viewport */}
      <CursorParticleEffect /> 
      
      {/* 2. Your router and application content */}
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