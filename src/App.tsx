import React, { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import LoginModal from './components/LoginModal'
import RegisterModal from './components/RegisterModal'
import AddPartModal from './components/AddPartModal'

function App() {

  const [user, setUser] = useState("admin")
  const [builds, setBuilds] = useState([])
  const [build, setBuild] = useState('')

  return (
    <div className="App">
      <h1 className="text-red-600">RC Part Picker</h1>
      <Banner user={user} setUser={setUser} setBuilds={setBuilds} builds={builds} setBuild={setBuild}/>
      <AddPartModal />
      <LoginModal setUser={setUser} setBuilds={setBuilds}/>
      <RegisterModal />

    </div>
  )
}

export default App
