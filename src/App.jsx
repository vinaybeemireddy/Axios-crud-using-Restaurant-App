import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Restaurant from './components/Restaurant'
import AddRestaurant from './components/AddRestaurant'

function App() {
  

  return (
   <>
<Routes>
  <Route path="/" element={<Restaurant/>}/>
  <Route path="/create" element={<AddRestaurant/>}/>
  <Route path="/edit" element={<AddRestaurant/>}/>
</Routes>
   </>
  )
}

export default App
