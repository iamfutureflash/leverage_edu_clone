import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Alert from './components/alert/Alert'
import Navbar from './components/navbar/Navbar'
import HeroSection from './components/hero/HeroSection'
import OurStory from './components/our_story/OurStory'
function App() {
  return (
    <div className="App">
    <Alert/>
    <Navbar/>
    <HeroSection/>
    <OurStory/>
    </div>
  )
}

export default App
