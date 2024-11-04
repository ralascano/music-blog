import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './layout/Layout'
import background from "./assets/background.jpg"

function App() {
  return (
    <div style={{backgroundImage: `url(${background})`, height: "100vh", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
      <Layout/>
    </div>
  )
}

export default App
