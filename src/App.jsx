import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Heaader'
import Banner from './components/Banner'
import About from './components/About'
import Services from './components/Services'
import Expertise from './components/Expertise'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Contact from './pages/Contact'

function App() {
 
  return (
    <>
<BrowserRouter>
<Routes>
  <Route path='/Home' element={<Home />}></Route>
  <Route path='/Contact' element={<Contact />}></Route>
  <Route path='/About' element={<About />}></Route>
  <Route path='/Expertise' element={<Expertise />}></Route>
  <Route path='/Services' element={<Services />}></Route>
 </Routes>
</BrowserRouter>

   
    </>
  )
}

export default App
